import cycImage from "../../../../resources/cyc.png";

function Header() {
  function handleImageClick() {
    window.location.reload();
  }

  return (
    <header className="fixed top-0 w-full bg-gray z-40 flex justify-center p-8 border-b-2 shadow-md cursor-pointer">
      <img
        src={cycImage}
        alt="cyc logo"
        className="absolute -top-11 left-5 w-48"
        onClick={handleImageClick}
      />
      <h1 className="text-4xl font-bold drop-shadow-2xl">Check Your CSS</h1>
    </header>
  );
}

export default Header;
