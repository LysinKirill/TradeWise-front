import { useState } from 'react';
import * as UI from '../TradingTable/styles';
import { IStrategyTableProps } from './types';
import { formatDateLocale } from '@shared/utils/date';
import { useAuth } from '@app/providers/AuthProvider';
import { deleteStrategy, getStrategy } from '@/shared/api/strategies';
import { toast } from 'react-toastify';
import { StrategyDetailsModal } from '../StrategyDetailsModal';
import { ConfirmationModal } from '@/shared/ui/components/ComfirmationModal';
import EditStrategyModal from '@/shared/ui/components/EditStrategyModal';

export const StrategyTable = ({ strategies, onUpdate }: IStrategyTableProps) => {
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null);
  const [deleteCandidate, setDeleteCandidate] = useState<string | null>(null);
  const [editStrategyId, setEditStrategyId] = useState<string | null>(null);

  const handleSave = () => {
    onUpdate?.();
    setEditStrategyId(null);
  };

  const handleEdit = async (strategyId: string) => {
    try {
      const strategyData = await getStrategy(strategyId);
      setEditStrategyId(strategyId);

    } catch (error) {
      toast.error('Failed to load strategy for editing');
    }
  };

  const handleDelete = async (strategyId: string) => {
    try {
      await deleteStrategy({ strategyId: strategyId });
      onUpdate?.();
      toast.success('Strategy deleted successfully');
    } catch (error) {
      toast.error('Failed to delete strategy');
    } finally {
      setDeleteCandidate(null);
    }
  };

  return (
    <>
      <UI.Table>
        <UI.TableHeader>
          <UI.StyledTableRow>
            <UI.TableHeaderCell>Name</UI.TableHeaderCell>
            <UI.TableHeaderCell>Created</UI.TableHeaderCell>
            <UI.TableHeaderCell>Description</UI.TableHeaderCell>
            <UI.TableHeaderCell>Actions</UI.TableHeaderCell>
          </UI.StyledTableRow>
        </UI.TableHeader>
        <UI.TableBody>
          {strategies.map((strategy) => (
            <UI.StyledTableRow
              key={strategy.id}
              onClick={() => setSelectedStrategy(strategy.id)}
            >
              <UI.StyledTableCell>{strategy.title}</UI.StyledTableCell>
              <UI.StyledTableCell>
                {formatDateLocale(strategy.createdAt)}
              </UI.StyledTableCell>
              <UI.StyledTableCell>{strategy.description}</UI.StyledTableCell>
              <UI.StyledTableCell>
                <UI.ActionButtonGroup>
                  <UI.EditButton
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditStrategyId(strategy.id);
                    }}
                  >
                    Edit
                  </UI.EditButton>
                  <UI.DeleteButton
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteCandidate(strategy.id);
                    }}
                  >
                    Delete
                  </UI.DeleteButton>
                </UI.ActionButtonGroup>
              </UI.StyledTableCell>
            </UI.StyledTableRow>
          ))}
        </UI.TableBody>
      </UI.Table>

      {selectedStrategy && (
        <StrategyDetailsModal
          strategyId={selectedStrategy}
          onClose={() => setSelectedStrategy(null)}
          onDelete={(id) => setDeleteCandidate(id)}
          onEdit={handleEdit}
        />
      )}

      <ConfirmationModal
        isOpen={!!deleteCandidate}
        title="Confirm Deletion"
        message="Are you sure you want to delete this strategy? This action cannot be undone."
        onConfirm={() => deleteCandidate && handleDelete(deleteCandidate)}
        onCancel={() => setDeleteCandidate(null)}
      />

      {editStrategyId && (
        <EditStrategyModal
          strategyId={editStrategyId}
          onClose={() => setEditStrategyId(null)}
          onSave={handleSave}
        />
      )}
    </>
  );
};