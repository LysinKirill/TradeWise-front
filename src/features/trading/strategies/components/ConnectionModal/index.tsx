import { useState, useEffect } from 'react';
import * as UI from './styles';
import { fetchSupportedInstruments } from '@/shared/api/stocks';
import { StatTypeOptions, TransitionConditionOptions } from './constants';
import { Condition, ConnectionModalProps, Instrument } from './types';

export const ConnectionModal = ({
  nodes,
  connection,
  onSave,
  onClose,
}: ConnectionModalProps) => {
  const [source, setSource] = useState(connection?.source || '');
  const [target, setTarget] = useState(connection?.target || '');
  const [conditions, setConditions] = useState<Condition[]>(
    connection?.conditions || []
  );
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [loadingInstruments, setLoadingInstruments] = useState(true);

  useEffect(() => {
    const loadInstruments = async () => {
      try {
        const data = await fetchSupportedInstruments();
        console.log(data);
        setInstruments(data || []);
      } catch (error) {
        console.error('Failed to load instruments:', error);
        setInstruments([]);
      } finally {
        setLoadingInstruments(false);
      }
    };

    loadInstruments();
  }, []);

  const addCondition = () => {
    setConditions([...conditions, {
      instrumentId: '',
      statType: 'Unknown',
      transitionConditionType: 'Unknown',
      value: ''
    }]);
  };

  const updateCondition = (
    index: number,
    field: keyof Condition,
    value: string
  ) => {
    const newConditions = [...conditions];
    newConditions[index][field] = value as any;
    setConditions(newConditions);
  };

  return (
    <UI.ModalOverlay>
      <UI.ModalContainer>
        <UI.ModalHeader>
          <UI.ModalTitle>{connection ? 'Edit' : 'New'} Connection</UI.ModalTitle>
          <UI.CloseButton onClick={onClose}>×</UI.CloseButton>
        </UI.ModalHeader>

        <UI.ModalBody>
          <UI.FormGroup>
            <label>Source Node:</label>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
            >
              <option value="">Select Source</option>
              {nodes.map(node => (
                <option key={node.id} value={node.id}>
                  {node.name || node.id}
                </option>
              ))}
            </select>
          </UI.FormGroup>

          <UI.FormGroup>
            <label>Target Node:</label>
            <select
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            >
              <option value="">Select Target</option>
              {nodes.map(node => (
                <option key={node.id} value={node.id}>
                  {node.name || node.id}
                </option>
              ))}
            </select>
          </UI.FormGroup>

          <UI.ConditionsHeader>
            <h4>Conditions</h4>
            <UI.AddButton onClick={addCondition}>+ Add Condition</UI.AddButton>
          </UI.ConditionsHeader>

          {conditions.map((cond, index) => (
            <UI.ConditionRow key={index}>
              <select
                value={cond.instrumentId}
                onChange={(e) => updateCondition(index, 'instrumentId', e.target.value)}
              >
                <option value="">Select Instrument</option>
                {loadingInstruments ? (
                  <option disabled>Loading instruments...</option>
                ) : (
                  instruments.map(instrument => (
                    <option key={instrument.id} value={instrument.name}>
                      {instrument.name}
                    </option>
                  ))
                )}
              </select>

              <select
                value={cond.statType}
                onChange={(e) => updateCondition(index, 'statType', e.target.value)}
              >
                {StatTypeOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={cond.transitionConditionType}
                onChange={(e) => updateCondition(index, 'transitionConditionType', e.target.value)}
              >
                {TransitionConditionOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <input
                type="number"
                value={cond.value}
                onChange={(e) => updateCondition(index, 'value', e.target.value)}
              />

              <UI.RemoveButton onClick={() =>
                setConditions(conditions.filter((_, i) => i !== index))
              }>
                ×
              </UI.RemoveButton>
            </UI.ConditionRow>
          ))}
        </UI.ModalBody>

        <UI.ModalFooter>
          <UI.ActionButton onClick={onClose}>Cancel</UI.ActionButton>
          <UI.ActionButton
            onClick={() => onSave({ source, target, conditions })}
            disabled={!source || !target}
          >
            Save
          </UI.ActionButton>
        </UI.ModalFooter>
      </UI.ModalContainer>
    </UI.ModalOverlay>
  );
};