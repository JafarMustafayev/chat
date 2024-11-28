import { useEffect, useState } from "react";

function PreviewImages({ files, setFiles, showPreview, setShowPreview }) {
  useEffect(() => {
    if (files && files.length > 0) {
      setShowPreview(true);
    } else {
      setShowPreview(false);
    }
  }, [files]);

  const handleRemove = (index) => {
    var newFiles = files.filter((file, i) => i !== index);
    setFiles(newFiles);
  };

  if (showPreview) {
    return (
      <>
        <div className="flex flex-wrap  items-end ">
          {files.map((file, index) => {
            return (
              <div id="imagePreview" className=" gap-2  p-2  ">
                <div className="group relative inline-block text-sm text-token-text-primary ">
                  <div
                    class="relative overflow-hidden border border-token-border-light bg-token-main-surface-primary rounded-2xl"
                    bis_skin_checked="1"
                  >
                    <div class="h-14 w-14" bis_skin_checked="1">
                      <button
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:r3m:"
                        data-state="closed"
                        class="h-full w-full"
                        index={index}
                      >
                        <span
                          class="flex items-center h-full w-full justify-center bg-gray-500 dark:bg-gray-700 bg-cover bg-center text-white"
                          index={index}
                          style={{
                            backgroundImage: `url(data:image/jpeg;base64,${file})`,
                          }}
                        ></span>
                      </button>
                    </div>
                  </div>
                  <button
                    class="absolute right-1 top-1 -translate-y-1/2 translate-x-1/2 rounded-full  border-[3px] border-[#f4f4f4] bg-black p-[2px] text-white  dark:bg-white dark:text-black"
                    index={index}
                    onClick={() => {
                      handleRemove(index);
                    }}
                  >
                    <span class="" data-state="closed">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon-lx"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.30286 6.80256C7.89516 6.21026 8.85546 6.21026 9.44775 6.80256L14.5003 11.8551L19.5529 6.80256C20.1452 6.21026 21.1055 6.21026 21.6978 6.80256C22.2901 7.39485 22.2901 8.35515 21.6978 8.94745L16.6452 14L21.6978 19.0526C22.2901 19.6449 22.2901 20.6052 21.6978 21.1974C21.1055 21.7897 20.1452 21.7897 19.5529 21.1974L14.5003 16.1449L9.44775 21.1974C8.85546 21.7897 7.89516 21.7897 7.30286 21.1974C6.71057 20.6052 6.71057 19.6449 7.30286 19.0526L12.3554 14L7.30286 8.94745C6.71057 8.35515 6.71057 7.39485 7.30286 6.80256Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default PreviewImages;
