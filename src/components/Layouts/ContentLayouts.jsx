/* eslint-disable react/prop-types */
import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";

const ContentLayouts = (props) => {
  const { typeNav, children } = props;
  return (
    <div>
      <div className="px-[20px]">
        <Navbar typeNav={typeNav} />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ContentLayouts;
