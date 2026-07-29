CREATE TABLE public.subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  source text NOT NULL DEFAULT 'newsletter',
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT subscribers_email_unique UNIQUE (email)
);

GRANT INSERT ON public.subscribers TO anon;
GRANT INSERT ON public.subscribers TO authenticated;
GRANT ALL ON public.subscribers TO service_role;

ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe" ON public.subscribers
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(email) <= 255
    AND source IN ('newsletter','sprint')
  );