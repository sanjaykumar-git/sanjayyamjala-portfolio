
-- Create a public bucket named "resumes" for resume files
insert into storage.buckets (id, name, public)
values ('resumes', 'resumes', true);

-- Make sure all users can read files in the "resumes" bucket
-- (This policy is automatically set for public buckets, but can be further customized if needed)
