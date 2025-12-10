How to add the Geist font to this project

1) Copy your Geist font files into this folder.
   Example filenames (recommended):
     - Geist-Regular.woff2
     - Geist-Bold.woff2

2) Open `src/app/layout.tsx` and find the commented `localFont` example.
   Uncomment the `import localFont from 'next/font/local'` line and the
   `const geist = localFont({...})` block. Update the `path` values if your
   filenames differ.

3) Replace the `body` class string in `src/app/layout.tsx` so it uses
   the `geist.variable` instead of the Google-font variables. Example:

   Before:
     <body className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}>

   After:
     <body className={`${geist.variable} ${jetBrainsMono.variable} antialiased`}>

4) Commit and redeploy. The Next.js build will include the local font.

Notes:
- Keep the files as `.woff` or `.woff2` for best browser support.
- If you don't add the files and leave the example commented, the project
  will continue to use `Inter` (Google) as the default font and won't fail
  builds.