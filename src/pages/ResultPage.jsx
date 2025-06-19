import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const";
import Result from "../components/Result/Result";

export default function ResultPage() {
    const location = useLocation();
    const correctNumLen = location.state.correctNumLen;
    const maxQuizLen = location.state.maxQuizLen;

    return (
        <>
            <h1>Result</h1>
            <Result correctNumLen={correctNumLen} maxQuizLen={maxQuizLen} />
            <br />
            <Link to={ROUTES.QUIZ}>Try again</Link>
        </>
    )
}
