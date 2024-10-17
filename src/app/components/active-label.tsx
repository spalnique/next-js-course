import clsx from 'clsx';

export enum Status {
  Active = 'Active',
  NotActive = 'Not Active',
  Pending = 'Pending',
  Suspended = 'Suspended',
}

export type StatusLabelProps = { status: Status; disabled?: boolean };

function StatusLabel({ status, disabled }: StatusLabelProps) {
  return (
    <>
      <div
        className={clsx(
          'inline-flex items-center px-3.5 py-1 rounded-3xl cursor-default text-sm font-medium',
          status === Status.Active && 'text-green-700 bg-green-100',
          status === Status.NotActive && 'text-red-700 bg-red-100',
          status === Status.Pending && 'text-orange-700 bg-orange-100',
          status === Status.Suspended && 'text-blue-700 bg-blue-100',
          { ['opacity-75 cursor-not-allowed']: disabled }
        )}>
        <span className={'size-1 mr-2 rounded-full bg-current'} />
        {status}
      </div>
    </>
  );
}

export default StatusLabel;
