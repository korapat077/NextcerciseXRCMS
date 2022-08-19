import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillCaretDownFill, BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";

const CreateEventEid = ({ eIdEdit }) => {
  const [bookingInfo, setBookingInfo] = useState([]);
  const [base64Event, setBase64Event] = useState(null);
  const [binaryEvent, setBinaryEvent] = useState(null);
  const [base64Headders, setBase64Headders] = useState(null);
  const [binaryHeadders, setBinaryHeadders] = useState(null);
  const [base64visual, setBase64visual] = useState(null);
  const [binaryvisual, setBinaryvisual] = useState(null);
  const [dropdownDefault, setDropdownDefault] = useState(false);
  const [title, setTitle] = useState([]);
  const [periodStart, setPeriodStart] = useState([]);
  const [periodEnd, setPeriodEnd] = useState([]);
  const [description, setDescription] = useState([]);
  const [rewardId, setRewardId] = useState([]);
  const [hostCode, setHostCode] = useState([]);
  const [hostDetail, setHostDetail] = useState([]);
  const [banner, setBanner] = useState([]);
  const [header, setHeader] = useState([]);
  const [visual, setVisual] = useState([]);

  const [databyeId, setDatabyeId] = useState([]);
  useEffect(() => {
    if (eIdEdit) {
      axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_APP_NAME}/event/${eIdEdit}`,
      }).then(function (response) {
        setDatabyeId(response.data.result);
        // console.log(response.data.result);
      });
    } else {
    }
  }, []);

  const UploadFileEvent = (props) => {
    const { fileName, base64, setBase64, setStateBinaryEvent } = props;

    const toBase64 = async (file) => {
      const url = URL.createObjectURL(file);
      setStateBinaryEvent(file);
      setBase64(url);
    };

    return (
      <label
        htmlFor={`dropzone${fileName}`}
        className={`${
          base64 !== null ? "h-96" : "h-96"
        } flex flex-col mt-5 justify-center items-center  w-full bg-gray-50 rounded-lg border-2 border-[#0F605E] border-dashed cursor-pointer overflow-hidden`}
      >
        <ImagePreview base64={base64} />
        <input
          id={`dropzone${fileName}`}
          type="file"
          className="hidden"
          accept=".png,.jpg,.jpeg"
          onChange={(e) => {
            toBase64(e.target.files[0]);
            setBanner(e.target.files[0]);
          }}
        />
      </label>
    );
  };
  const ImagePreview = (props) => {
    const { base64 } = props;
    if (base64 !== null) {
      return <img src={base64} width="100%" />;
    } else {
      return (
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            className="mb-3 w-10 h-10 text-[#0F605E]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-[#0F605E] ">
            <span className="font-semibold">อัปโหลดเอกสาร</span>
          </p>
          <p className="text-xs text-[#0F605E]  font-bold">
            * รองรับเฉพาะไฟล์นามสกุล PNG , JPG เท่านั้น และมีขนาดไม่เกิน 2Mb*
          </p>
        </div>
      );
    }
  };

  const UploadFileHeadders = (props) => {
    const { fileName, base64, setBase64, setStateBinaryHeadders } = props;

    const toBase64 = async (file) => {
      const url = URL.createObjectURL(file);
      setStateBinaryHeadders(file);
      setBase64(url);
    };

    return (
      <label
        htmlFor={`dropzone${fileName}`}
        className={`${
          base64 !== null ? "h-96" : "h-96"
        } flex flex-col mt-5 justify-center items-center  object-scale-down w-full bg-gray-50 rounded-lg border-2 border-[#0F605E] border-dashed cursor-pointer overflow-hidden`}
      >
        <ImagePreviewHeadders base64={base64} />
        <input
          id={`dropzone${fileName}`}
          type="file"
          className="hidden"
          accept=".png,.jpg,.jpeg"
          onChange={(e) => {
            toBase64(e.target.files[0]);
            setHeader(e.target.files[0]);
          }}
        />
      </label>
    );
  };
  const ImagePreviewHeadders = (props) => {
    const { base64 } = props;
    if (base64 !== null) {
      return <img src={base64} width="100%" />;
    } else {
      return (
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            className="mb-3 w-10 h-10 text-[#0F605E]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-[#0F605E] ">
            <span className="font-semibold">อัปโหลดเอกสาร</span>
          </p>
          <p className="text-xs text-[#0F605E]  font-bold">
            * รองรับเฉพาะไฟล์นามสกุล PNG , JPG เท่านั้น และมีขนาดไม่เกิน 2Mb*
          </p>
        </div>
      );
    }
  };

  const UploadFilevisual = (props) => {
    const { fileName, base64, setBase64, setStateBinaryvisual } = props;

    const toBase64 = async (file) => {
      const url = URL.createObjectURL(file);
      setStateBinaryvisual(file);
      setBase64(url);
    };

    return (
      <label
        htmlFor={`dropzone${fileName}`}
        className={`${
          base64 !== null ? "h-96" : "h-96"
        } flex flex-col mt-5 justify-center items-center w-full object-scale-down bg-gray-50 rounded-lg border-2 border-[#0F605E] border-dashed cursor-pointer overflow-hidden`}
      >
        <ImagePreviewvisual base64={base64} />
        <input
          id={`dropzone${fileName}`}
          type="file"
          className="hidden"
          accept=".png,.jpg,.jpeg"
          onChange={(e) => {
            toBase64(e.target.files[0]);
            setVisual(e.target.files[0]);
          }}
        />
      </label>
    );
  };
  const ImagePreviewvisual = (props) => {
    const { base64 } = props;
    if (base64 !== null) {
      return <img src={base64} width="100%" />;
    } else {
      return (
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            className="mb-3 w-10 h-10 text-[#0F605E]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-[#0F605E] ">
            <span className="font-semibold">อัปโหลดเอกสาร</span>
          </p>
          <p className="text-xs text-[#0F605E]  font-bold">
            * รองรับเฉพาะไฟล์นามสกุล PNG , JPG เท่านั้น และมีขนาดไม่เกิน 2Mb*
          </p>
        </div>
      );
    }
  };

  const onPublish = (e) => {
    e.preventDefault();
    const bodyFormData = new FormData();
    bodyFormData.append("title", title);
    bodyFormData.append("periodStart", periodStart);
    bodyFormData.append("periodEnd", periodEnd);
    bodyFormData.append("description", description);
    bodyFormData.append("rewardId", rewardId);
    bodyFormData.append("hostCode", hostCode);
    bodyFormData.append("hostDetail", hostDetail);
    bodyFormData.append("banner", banner);
    bodyFormData.append("header", header);
    bodyFormData.append("visual", visual);
    bodyFormData.append("isPublish", true);
    Swal.fire({
      title: "Confirm event creation on publish?",
      text: "Please check the information before submitting the gene.!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#53a33d",
      cancelButtonColor: "#d33",
      confirmButtonText: "save",
      cancelButtonText: "cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "post",
          data: bodyFormData,
          url: `${process.env.NEXT_PUBLIC_APP_NAME}/event`,
        }).then(function (response) {
          Swal.fire({
            confirmButtonText: "save",
            confirmButtonColor: "#53a33d",
            title: "Successfully created the event.!",
          });
        });
      }
    });
  };
  const onDraft = (e) => {
    e.preventDefault();
    const bodyFormData = new FormData();
    bodyFormData.append("title", title);
    bodyFormData.append("periodStart", periodStart);
    bodyFormData.append("periodEnd", periodEnd);
    bodyFormData.append("description", description);
    bodyFormData.append("rewardId", rewardId);
    bodyFormData.append("hostCode", hostCode);
    bodyFormData.append("hostDetail", hostDetail);
    bodyFormData.append("banner", banner);
    bodyFormData.append("header", header);
    bodyFormData.append("visual", visual);
    bodyFormData.append("isDraft", true);
    bodyFormData.append("isPublish", false);
    Swal.fire({
      title: "Confirm event creation on Draft?",
      text: "Please check the information before submitting the gene.!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#53a33d",
      cancelButtonColor: "#d33",
      confirmButtonText: "save",
      cancelButtonText: "cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "post",
          data: bodyFormData,
          url: `${process.env.NEXT_PUBLIC_APP_NAME}/event`,
        }).then(function (response) {
          Swal.fire({
            confirmButtonText: "save",
            confirmButtonColor: "#53a33d",
            title: "Successfully created the event.!",
          });
        });
      }
    });
  };
  const onUnpublish = (e) => {
    e.preventDefault();
    const bodyFormData = new FormData();
    bodyFormData.append("title", title);
    bodyFormData.append("periodStart", periodStart);
    bodyFormData.append("periodEnd", periodEnd);
    bodyFormData.append("description", description);
    bodyFormData.append("rewardId", rewardId);
    bodyFormData.append("hostCode", hostCode);
    bodyFormData.append("hostDetail", hostDetail);
    bodyFormData.append("banner", banner);
    bodyFormData.append("header", header);
    bodyFormData.append("visual", visual);
    bodyFormData.append("isTrash", true);
    bodyFormData.append("isPublish", false);
    Swal.fire({
      title: "Confirm event creation on Unpublish?",
      text: "Please check the information before submitting the gene.!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#53a33d",
      cancelButtonColor: "#d33",
      confirmButtonText: "save",
      cancelButtonText: "cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "post",
          data: bodyFormData,
          url: `${process.env.NEXT_PUBLIC_APP_NAME}/event`,
        }).then(function (response) {
          Swal.fire({
            confirmButtonText: "save",
            confirmButtonColor: "#53a33d",
            title: "Successfully created the event.!",
          });
        });
      }
    });
  };
  return (
    <div>
      <div>
        <form className="w-full mt-5 ">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Events title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight "
                id="grid-first-name"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={databyeId.title}
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Events period
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700   rounded py-3 px-4 mb-3 leading-tight "
                id="grid-first-name"
                type="date"
                onChange={(e) => setPeriodStart(e.target.value)}
                defaultValue={databyeId.periodStart}
              />
            </div>
            <div className="w-full md:w-1/4 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                ---
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="date"
                placeholder="end date"
                onChange={(e) => setPeriodEnd(e.target.value)}
                defaultValue={databyeId.periodEnd}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Events description
              </label>
              <textarea
                className="resize-y rounded-md w-full h-20 p-2 bg-gray-200 "
                onChange={(e) => setDescription(e.target.value)}
                defaultValue={databyeId.description}
                required
              ></textarea>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Events coupon reward id
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                onChange={(e) => setRewardId(e.target.value)}
                defaultValue={databyeId.rewardId}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Host Code
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                onChange={(e) => setHostCode(e.target.value)}
                defaultValue={databyeId.hostCode}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Host Detail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                onChange={(e) => setHostDetail(e.target.value)}
                defaultValue={databyeId.hostDetail}
              />
            </div>
          </div>
          <div className="flex mt-5">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Events Banner
              </label>
              <UploadFileEvent
                fileName="setBinaryEvent"
                base64={base64Event}
                setBase64={setBase64Event}
                setStateBinaryEvent={setBinaryEvent}
              />
            </div>
          </div>
          <div className="flex mt-5">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Headders
              </label>
              <UploadFileHeadders
                fileName="Headders"
                base64={base64Headders}
                setBase64={setBase64Headders}
                setStateBinaryHeadders={setBinaryHeadders}
              />
            </div>
          </div>
          <div className="flex mt-5">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                visual
              </label>
              <UploadFilevisual
                fileName="Visual"
                base64={base64visual}
                setBase64={setBase64visual}
                setStateBinaryvisual={setBinaryvisual}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-end gap-4 mt-5">
            <div>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className="py-2 px-4 text-sm font-medium text-[#ffff]  bg-green-700 rounded-l-lg border   "
                  onClick={onPublish}
                >
                  Publish
                </button>
                <button
                  id="dropdownDefault"
                  datadropdowntoggle="dropdown"
                  className="py-2 px-4 text-sm font-medium text-[#ffff]  bg-green-700 rounded-r-lg   border-b "
                  type="button"
                  onClick={() => {
                    if (dropdownDefault) {
                      setDropdownDefault(false);
                    } else {
                      setDropdownDefault(true);
                    }
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      setDropdownDefault(false);
                    }, 100);
                  }}
                >
                  {" "}
                  <BsFillCaretDownFill />
                </button>
              </div>
              <div
                id="dropdown"
                className={`${
                  dropdownDefault ? "black" : "hidden"
                }  z-10 bg-white rounded divide-y divide-gray-100 shadow absolute `}
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefault"
                >
                  <li>
                    <button
                      className="block py-2 px-4 hover:bg-gray-100 "
                      onClick={onDraft}
                    >
                      Save Draft
                    </button>
                  </li>
                  <li>
                    <button
                      className="block py-2 px-4 hover:bg-gray-100 "
                      onClick={onUnpublish}
                    >
                      Unpublish
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <button className="bg-[#d64e3c] hover:bg-[#c9301c] text-white font-bold py-1 px-4 border rounded">
                <div className=" flex flex-wrap">
                  <div>Trash</div>
                  <div className=" pt-1 pl-1">
                    <BsTrash />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateEventEid;
