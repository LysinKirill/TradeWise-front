import { useState } from 'react';
import * as UI from './styles';

type Condition = {
  parameter: string;
  condition: string;
  value: string;
};

type ConnectionModalProps = {
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

  const addCondition = () => {
    setConditions([...conditions, { parameter: '', condition: '', value: '' }]);
    console.log(conditions);
  };

  const updateCondition = (index: number, field: keyof Condition, value: string) => {
    const newConditions = [...conditions];
    newConditions[index][field] = value;
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
                value={cond.parameter}
                onChange={(e) => updateCondition(index, 'parameter', e.target.value)}
              >
                <option value="">Parameter</option>
                <option value="Bollinger Band Upper">Bollinger Band Upper</option>
                <option value="Moving Average">Moving Average</option>
              </select>
              
              <select
                value={cond.condition}
                onChange={(e) => updateCondition(index, 'condition', e.target.value)}
              >
                <option value=">">&gt;</option>
                <option value="<">&lt;</option>
                <option value="=">=</option>
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