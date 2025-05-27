/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { StatTypeOptions, TransitionConditionOptions } from "./constants";

export type Condition = {
  instrumentId: string;
  statType: typeof StatTypeOptions[number];
  transitionConditionType: typeof TransitionConditionOptions[number];
  value: string;
};

export type Instrument = {
  figi: ReactNode;
  lot: ReactNode;
  currency: any;
  sector: ReactNode;
  buyAvailable: any;
  sellAvailable: any;
  id: string;
  name: string;
};

export type ConnectionModalProps = {
  nodes?: any;
  connection?: any;
  onSave: (connection: {
    source: string;
    target: string;
    conditions: Condition[];
  }) => void;
  onClose: () => void;
};