import React from "react";
import PropTypes from "prop-types";

const IframeEmbed = ({ embedId }: any) => (
  <>
    {/* <label htmlFor="my-modal-4" className="btn">
      open modal
    </label> */}

    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
    <label htmlFor="my-modal-4" className="modal cursor-pointer">
      <label className="modal-box relative" htmlFor="">
        {/* <IframeEmbed embedId="" /> */}
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </label>
    </label>
  </>

  // <div
  //   className="bg-black bg-opacity-80 z-30 w-screen h-screen absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center"
  //   onClick={iframeSetter}
  // >
  //   <div className="w-[80%] mx-auto">
  //     {/* <IframeEmbed embedId="" /> */}
  //     <div className="video-responsive">
  //       <iframe
  //         width="853"
  //         height="480"
  //         src={`https://www.youtube.com/embed/${embedId}`}
  //         frameBorder="0"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //         allowFullScreen
  //         title="Embedded youtube"
  //       />
  //     </div>
  //   </div>
  // </div>
);

IframeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default IframeEmbed;
