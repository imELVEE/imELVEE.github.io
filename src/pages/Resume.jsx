import resumePdf from "@documents/resume.pdf";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resumePage">
            <div className="pdfWrap">
                <div className="resumeActionsOverlay">
                <a className="resumeBtn" href={resumePdf} target="_blank" rel="noreferrer">
                    Open
                </a>
                <a className="resumeBtn" href={resumePdf} download>
                    Download
                </a>
                </div>

                <iframe className="pdf" src={resumePdf} title="Resume PDF" />
            </div>

            <p className="resumeFallback">
                If the PDF doesn’t render, <a href={resumePdf} download>download it here</a>.
            </p>
        </div>
    );
};

export default Resume;