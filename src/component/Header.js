import "../style/header.css";
export default function Header() {
  return (
    <div class="outer">
      <header class="container">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <input type="text" placeholder="Search" />
        </ul>
      </header>
    </div>
  );
}
