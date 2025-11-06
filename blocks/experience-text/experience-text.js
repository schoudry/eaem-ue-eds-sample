export default async function decorate(block) {
    console.log("window.hlx.codeBasePath------", `${window.hlx.codeBasePath}`);
    const response = await fetch(`${window.hlx.codeBasePath}/query-index.json`); 
    const json = await response.json(); 
    console.log("json------", json);
}
  