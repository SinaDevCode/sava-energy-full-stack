import React from "react";
import TitleSample from "../components/TitleSample";

const Products = () => {
	return (
		<>
			<TitleSample title="Starch" />

			<div className="flex flex-col md:flex-row px-8 lg:pl-24 lg:pr-32 py-10 gap-10 lg:gap-20">
				<img
					className="w-full md:w-80"
					src="\images\products\Sava-Starch-LV.webp"
					alt="Sava-Starch"
				/>

				<div className="flex flex-col gap-4 max-w-[620px] mx-auto text-justify text-grey">
					<p>
						Starch Lv & Starch HT is a high-quality, preserved
						polysaccharide used to provide filtration control and
						rheology stability in all types of water-base drilling
						fluids. This non-ionic, natural polymer is effective in
						all make-up waters, including high alinity and
						high-hardness brines such as NaCl, KCl, MgCl2, CaCl2 and
						complex brines. We provide the best drilling additives
						this industry has to offer, and we guarantee that our
						product has been quality controlled to meet industry
						standards before ever leaving our facility.
					</p>
					<p>
						SAVA R&D labs follow all API and NISOC test methods and
						standard operating procedures to ensure we only sell the
						finest additives on the market and is now offering that
						same assurance to anyone in the industry.
					</p>
				</div>
			</div>
		</>
	);
};

export default Products;
