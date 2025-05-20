const key = process.env.NEXT_PUBLIC_API_Public_Key;
const BACKEND_ROOT_URL = process.env.BACKEND_URL;

export default async function getBook() {
  const result = await fetch(
    `${BACKEND_ROOT_URL}/api/v2/app/book/chapter/index?book_slug=boook-2&public_key=${key}`
  );//check testing

  return result.json();
}
