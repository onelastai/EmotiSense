import { EmotiSenseAgent } from './agent';

const agent = new EmotiSenseAgent();

// demo
const sample = "I feel so much joy and hope today!";
console.log("Analysis:", agent.analyze(sample));
