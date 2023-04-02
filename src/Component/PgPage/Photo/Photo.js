import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Photo() {
	// To open the lightbox change the value of the "toggler" prop.
	const [toggler, setToggler] = useState(false);

	return (
		<>
			<button onClick={() => setToggler(!toggler)} style={{outline:"none",background:"transparent",border:"none"}}>
				Images
			</button>
			 <FsLightbox
				toggler={toggler}
				sources={[
					'https://i.imgur.com/fsyrScY.jpg',
					"https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg",
                    "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg",

				]}
			/>
		 </>
	);
}

export default Photo;