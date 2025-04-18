import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

function RTE({ label, name, control, defaultValue }) {
    return (
        <div>
            {label && <label>Content: </label>}

            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey='ix3mbp6bjtdvq5h29e7rakwlxg78m0wpon40d6fyyt2c2ex3'
                        initialValue={defaultValue}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}

                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    );
}

export default RTE;
