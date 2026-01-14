export default function Footer() {
  return (
    <footer className="bg-(--smart-blue)">
      <div className="max-w-(--max-width) px-4 mx-auto pt-6 pb-10">
        <div>{new Date().getFullYear()} | All Rights Reserved</div>
        <div>
          <a
            className="underline"
            href="https://www.vecteezy.com/free-png/paint-splatter"
            target="_blank"
          >
            Paint Splatter PNGs by Vecteezy
          </a>
        </div>
        <div>
          <a
            href="https://www.cleanpng.com/"
            className="underline"
            target="_blank"
          >
            Clean PNG
          </a>
        </div>
      </div>
    </footer>
  );
}
