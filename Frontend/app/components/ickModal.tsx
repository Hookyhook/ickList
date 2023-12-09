import { submitModal } from '@lib';

export function IckModal() {
  return (
    <dialog id="ickModal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-xl mb-5">New Ick</h3>
        <div className="flex flex-col gap-7">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Describe your ick</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Ick Description"
            ></textarea>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue={'Which gender has this ick?'}
          >
            <option>MALE</option>
            <option>FEMALE</option>
            <option>GENERAL</option>
          </select>
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue={'What kind of ick is it?'}
          >
            <option>ICK</option>
            <option>REVERSEICK</option>
          </select>
          <button className="btn btn-primary" onClick={submitModal}>
            Submit
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
