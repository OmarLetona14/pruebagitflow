

const palidrome = (chain)=>{
    chain = chain.toLowerCase().replace(/\s/g, "");
    const reverseChain = chain.split("").reverse().join("");
    return chain == reverseChain ? true : false 
}
