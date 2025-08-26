import { config } from './config';

export class EmotiSenseAgent {
  constructor() {
    console.log(\🧠 EmotiSense Agent v\ initialized\);
  }

  analyze(text: string) {
    // simple placeholder for emotion detection
    const emotions = config.emotions;
    const detected = emotions.find(e => text.toLowerCase().includes(e)) || "neutral";
    return {
      emotion: detected,
      confidence: Math.random().toFixed(2)
    };
  }
}
