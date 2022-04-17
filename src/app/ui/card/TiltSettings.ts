export interface TiltSettings {
  reverse?: boolean;
  max?: number;
  startX?: number;
  startY?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  transition?: boolean;
  axis?: null;
  reset?: boolean;
  easing?: string;
  // easing:                 "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  glare?: boolean;
  gyroscope?: boolean;
  gyroscopeMinAngleX?: number;
  gyroscopeMaxAngleX?: number;
  gyroscopeMinAngleY?: number;
  gyroscopeMaxAngleY?: number;
  gyroscopeSamples?: number;
}
