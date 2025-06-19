import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const";
import Result from "../components/Result/Result";
import Loading from "../components/Loading/Loading";

export default function ResultPage() {
    const [active, setActive] = useState(false);
    const location = useLocation();
    const correctNumLen = location.state.correctNumLen;
    const maxQuizLen = location.state.maxQuizLen;

    useEffect(() => {
        setTimeout(() => setActive(true), 2000);
    }, []);

    return (
        <>
            <Loading active={active} />
            <h1>Result</h1>
            <Result correctNumLen={correctNumLen} maxQuizLen={maxQuizLen} />
            <br />
            <Link to={ROUTES.QUIZ}>Try again</Link>
        </>
    )
}
