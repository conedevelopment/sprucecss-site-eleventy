<p class="lead">A file upload field with a preview section and place for metadata.</p>

## Technical Details

- The component is an "extended" file upload field only. With your custom functionality, you can extend it to be an actual user-friendly component.
- If the `.file-group__preview` has a `background-image`, it will automatically display the remove button and hide the blank slate icon. For this, it uses `:has`.
- It also utilizes `@container` for breaking on mobile.
