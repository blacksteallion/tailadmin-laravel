<x-common.component-card title="Textarea input fields with WYSIWYG editor">

    <!-- Basic WYSIWYG -->
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            Basic WYSIWYG Editor
        </label>
        <div class="wysiwyg-basic" data-type="basic" data-placeholder="Start writing...">
            <p>Hello! This is a basic WYSIWYG editor with essential formatting options.</p>
        </div>
    </div>

    <!-- Full WYSIWYG -->
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            Full WYSIWYG Editor
        </label>
        <div class="wysiwyg-full" data-type="full" data-placeholder="Start writing...">
            <h1>Heading Level 1</h1>
            <p>This is a <strong>full-featured</strong> WYSIWYG editor with <em>rich</em> formatting capabilities.</p>
            <h2>Heading Level 2</h2>
            <p>You can add <u>underlined text</u>, <s>strikethrough</s>, and <a href="https://tailadmin.com" target="_blank">links</a>.</p>
            <blockquote>This is a blockquote — perfect for highlighting important quotes.</blockquote>
            <pre><code>console.log('Code block support');</code></pre>
            <ul>
                <li>Unordered list item</li>
                <li>Another item</li>
            </ul>
        </div>
    </div>

    <!-- Inline WYSIWYG (Bubble) -->
    <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            Inline WYSIWYG Editor (Bubble)
        </label>
        <p class="mb-3 text-xs text-gray-500 dark:text-gray-400">
            Select text to see the formatting toolbar appear inline.
        </p>
        <div class="wysiwyg-inline" data-type="inline" data-placeholder="Start writing...">
            <p>Select any text in this editor to reveal the <strong>inline toolbar</strong>. It appears as a bubble above the selected text for quick formatting.</p>
        </div>
    </div>

</x-common.component-card>
