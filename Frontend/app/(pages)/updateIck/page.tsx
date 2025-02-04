import { getIck, updateIck } from '@lib';
import { redirect } from 'next/navigation';

interface PageProps {
  searchParams: Promise<{
    ickId: string
  }>;
}

export default async function UpdateIck({ searchParams }: Readonly<PageProps>) {
  let ickId = (await searchParams).ickId;

  const ick = await getIck(ickId);

  async function updateIckAction(formData: FormData) {
    const ickDescription = formData.get('ickDescription') as string;
    const gender = formData.get('gender');
    const ickType = formData.get('ickType');

    if (!ickDescription || !gender || !ickType || !ickId) {
      return;
    }

    await updateIck({
      id: parseInt(ickId),
      ickDescription,
      gender,
      ickType
    });

    redirect('/');
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-full mx-auto p-6 shadow-lg rounded-lg bg-transparent">
        <h3 className="font-bold text-3xl mb-5 text-center text-primary">
          Update Ick
        </h3>
        <form action={updateIckAction}>
          <div className="flex flex-col gap-7">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Describe your ick</span>
              </div>
              <textarea
                name="ickDescription"
                className="textarea textarea-bordered h-24"
                defaultValue={ick.ickDescription}
              ></textarea>
            </label>
            <div className="flex flex-row gap-7 flex-wrap">
              <select
                name="gender"
                className="select select-bordered min-w-[200px] flex-grow"
                defaultValue={String(ick.gender)}
              >
                <option>MALE</option>
                <option>FEMALE</option>
                <option>GENERAL</option>
              </select>
              <select
                name="ickType"
                className="select select-bordered min-w-[200px] flex-grow"
                defaultValue={String(ick.ickType)}
              >
                <option>ICK</option>
                <option>REVERSEICK</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}