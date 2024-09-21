import logo from "../assets/Labyrinth.svg";

export default function Header(){
    return <header id="header">
        <img src={logo} alt="Labyrinth Logo" />
        <h1>LeaderBoard</h1>
    </header>
}