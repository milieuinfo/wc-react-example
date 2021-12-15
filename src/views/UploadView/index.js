import React, { useEffect, useRef, useState } from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "vl-ui-upload";
import "uig-webcomponents/lib/components/data-table";
import "uig-webcomponents/lib/components/data-table/styles.css";
import "uig-webcomponents/lib/components/link";
import "uig-webcomponents/lib/components/link/styles.css";

const UploadView = () => {
  const uploadRef = useRef();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    uploadRef.current.on("vl.upload.hook.fileChange", () =>
      setDisabled(uploadRef.current.acceptedFiles.length < 1)
    );
    uploadRef.current.on("success", (event) => {
      uploadRef.current.clear();
      setUploadedFiles((previousState) => [
        ...previousState,
        { name: event.name },
      ]);
    });
    uploadRef.current.on("complete", () => setLoading(false));
  }, []);

  return (
    <Page title="Upload">
      <SectionWrap stackedLarge>
        <div is="vl-column" data-vl-size="12">
          <div is="vl-grid" data-vl-is-stacked>
            <div is="vl-column" data-vl-size="12">
              <vl-upload
                ref={uploadRef}
                data-vl-max-files="5"
                url="http://httpbin.org/post"
                data-vl-input-name="files"
              ></vl-upload>
            </div>
            <div is="vl-column" data-vl-size="12">
              <button
                disabled={disabled ? true : null}
                data-vl-loading={loading ? true : null}
                onClick={() => {
                  setLoading(true);
                  uploadRef.current.upload();
                }}
                is="vl-button"
              >
                Documenten opladen
              </button>
            </div>
          </div>
        </div>
        {uploadedFiles.length > 0 && (
          <div is="vl-column" data-vl-size="12">
            <div is="vl-grid" data-vl-is-stacked>
              <div is="vl-column" data-vl-size="12">
                <table is="vl-data-table">
                  <thead>
                    <tr>
                      <th colSpan="3">Opgeladen documenten</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uploadedFiles.map((file, index) => (
                      <tr key={index}>
                        <td>{file.name}</td>
                        <td>
                          <a is="vl-link">Downloaden</a>
                        </td>
                        <td>
                          <button is="vl-button-link" data-vl-error>
                            Verwijderen
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div is="vl-column" data-vl-size="12">
                <button is="vl-button-link">
                  <span is="vl-icon" data-vl-icon="trash" data-vl-before></span>
                  Verwijder alle bestanden
                </button>
              </div>
            </div>
          </div>
        )}
      </SectionWrap>
    </Page>
  );
};

export default UploadView;
