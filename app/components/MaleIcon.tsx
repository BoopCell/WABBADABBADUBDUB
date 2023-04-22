import { ClassElement } from 'typescript';

export const MaleIcon = ({
	fillColor,
	className,
	height = '30px',
	width = '30px',
}: {
	fillColor: string;
	className?: string;
	height?: string;
	width?: string;
}) => (
	<svg
		className={className}
		width={width}
		height={height}
		version="1.1"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title></title>
		<g fill="none" fill-rule="evenodd">
			<g transform="translate(-60 -2079)" fill={fillColor}>
				<g transform="translate(56 160)">
					<path d="m11 1937c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm5-18.005v2h4.586l-5.4 5.402c-1.168-0.875-2.614-1.398-4.186-1.398-3.866 0-7 3.134-7 7s3.134 7.001 7 7.001 7-3.134 7-7c0-1.572-0.525-3.018-1.399-4.187l5.399-5.399v4.581h2v-8h-8z"></path>
				</g>
			</g>
		</g>
	</svg>
);
