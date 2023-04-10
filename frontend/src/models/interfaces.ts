// Obv worst name ever
export interface CalculatedObj {
  id: string;
  type: string;
  text: string;
  timing: {
    type: string;
    start: number;
    end: number;
    moveToPrev: number[];
  };
}
