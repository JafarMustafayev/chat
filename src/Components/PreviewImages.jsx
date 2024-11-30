import { useEffect, useState } from "react";
import DeleteImageSvg from "../SVG/DeleteImage";

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
                      <DeleteImageSvg />
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
