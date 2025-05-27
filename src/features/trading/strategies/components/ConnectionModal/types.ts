import { StatTypeOptions, TransitionConditionOptions } from "./constants";

export type Condition = {
  instrumentId: string;
  statType: typeof StatTypeOptions[number];
  transitionConditionType: typeof TransitionConditionOptions[number];
  value: string;
};

export type Instrument = {
  id: string;
  name: string;
};

export type ConnectionModalProps = {
  nodes: Array<{ id: string; name: string }>;
  connection?: {
    source: string;
    target: string;
    conditions: Condition[];
  };
  onSave: (connection: {
    source: string;
    target: string;
    conditions: Condition[];
  }) => void;
  onClose: () => void;
};