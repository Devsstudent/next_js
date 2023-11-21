import {getServerSideProps} from '../../demo-render-content/page.tsx'

export default async function renderingRequest(req, res){
	const {html, css } = await getServerSideProps();
	res.status(200).json({html, css });
}
