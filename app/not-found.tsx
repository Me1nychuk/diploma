import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oops!",
  description: ", ..",
};
export default function NotFound() {
  return (
    <div>
      <h1>Сторінку не знайдено</h1>
      <p>Вибачте, але ця сторінка не існує.</p>
    </div>
  );
}
