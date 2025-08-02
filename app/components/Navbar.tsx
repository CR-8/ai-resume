import {Link} from "react-router/internal/react-server-client";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to={"/"}>
                <p className={"font-bold text-2xl text-gradient"}>
                    ResuMe
                </p>
            </Link>
            <Link to={"/upload"}>
                <p className={"primary-button w-fit"}> Upload Resume </p>
            </Link>
        </nav>
    )
}