import web3 from "./web3";
import { contractAddress } from "./config";
import lotteryAbi from "./ABIs/lottery.abi.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default new web3.eth.Contract(lotteryAbi, contractAddress);
