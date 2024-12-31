import resume_pdf from "@documents/resume.pdf";
import "./Resume.css";

const Resume = () => {
    return (
        <object class="pdf" 
            data={resume_pdf}
            type="application/pdf"
            width="100%"
            height="100%">

            <p>Your browser does not support PDFs. Download the PDF <a href={resume_pdf}>here</a>.</p>
        </object>
    );
};

export default Resume;