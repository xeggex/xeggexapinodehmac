const XeggeX = require( "./xApiHmac.js" );

const yourApiKey = "";
const yourApiSecret = "";

const xApi = new XeggeX.Api( yourApiKey, yourApiSecret );


runTest();


async function runTest()
{


	let balances  = await xApi.balances();

	console.log(balances);




}