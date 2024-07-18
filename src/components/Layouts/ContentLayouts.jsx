/* eslint-disable react/prop-types */
import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";

const ContentLayouts = (props) => {
  const { typeNav, children, type, marginTop, typeFooter = true } = props;
  return (
    <div>
      <div className="px-[20px]">
        <Navbar typeNav={typeNav} type={type} marginTop={marginTop} />
        {children}
      </div>
      {typeFooter && <Footer />}
    </div>
  );
};

export default ContentLayouts;
