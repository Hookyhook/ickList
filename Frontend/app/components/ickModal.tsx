export default function IckModal() {
  return (
    <dialog id="my_modal_2" className="modal">
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
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Which gender has this ick?
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>General</option>
          </select>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              What kind of ick is it?
            </option>
            <option>Ick</option>
            <option>ReverseIck</option>
          </select>
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
