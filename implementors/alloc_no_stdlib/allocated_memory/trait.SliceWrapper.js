(function() {var implementors = {};
implementors["alloc_no_stdlib"] = [];
implementors["alloc_stdlib"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"alloc_stdlib/trait.SliceWrapper.html\" title=\"trait alloc_stdlib::SliceWrapper\">SliceWrapper</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc_stdlib/heap_alloc/struct.WrapBox.html\" title=\"struct alloc_stdlib::heap_alloc::WrapBox\">WrapBox</a>&lt;T&gt;","synthetic":false,"types":["alloc_stdlib::heap_alloc::WrapBox"]},{"text":"impl&lt;'a, T:&nbsp;'a&gt; <a class=\"trait\" href=\"alloc_stdlib/trait.SliceWrapper.html\" title=\"trait alloc_stdlib::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'a mut [T]</a>&gt; for <a class=\"struct\" href=\"alloc_stdlib/heap_alloc/struct.HeapPrealloc.html\" title=\"struct alloc_stdlib::heap_alloc::HeapPrealloc\">HeapPrealloc</a>&lt;'a, T&gt;","synthetic":false,"types":["alloc_stdlib::heap_alloc::HeapPrealloc"]}];
implementors["brotli"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"brotli/enc/input_pair/struct.InputReference.html\" title=\"struct brotli::enc::input_pair::InputReference\">InputReference</a>&lt;'a&gt;","synthetic":false,"types":["brotli::enc::input_pair::InputReference"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"brotli/enc/input_pair/struct.InputReferenceMut.html\" title=\"struct brotli::enc::input_pair::InputReferenceMut\">InputReferenceMut</a>&lt;'a&gt;","synthetic":false,"types":["brotli::enc::input_pair::InputReferenceMut"]},{"text":"impl <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/histogram/struct.HistogramLiteral.html\" title=\"struct brotli::enc::histogram::HistogramLiteral\">HistogramLiteral</a>","synthetic":false,"types":["brotli::enc::histogram::HistogramLiteral"]},{"text":"impl <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/histogram/struct.HistogramCommand.html\" title=\"struct brotli::enc::histogram::HistogramCommand\">HistogramCommand</a>","synthetic":false,"types":["brotli::enc::histogram::HistogramCommand"]},{"text":"impl <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/histogram/struct.HistogramDistance.html\" title=\"struct brotli::enc::histogram::HistogramDistance\">HistogramDistance</a>","synthetic":false,"types":["brotli::enc::histogram::HistogramDistance"]},{"text":"impl&lt;AllocU32:&nbsp;<a class=\"trait\" href=\"brotli/writer/trait.Allocator.html\" title=\"trait brotli::writer::Allocator\">Allocator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/backward_references/hash_to_binary_tree/struct.H10Buckets.html\" title=\"struct brotli::enc::backward_references::hash_to_binary_tree::H10Buckets\">H10Buckets</a>&lt;AllocU32&gt;","synthetic":false,"types":["brotli::enc::backward_references::hash_to_binary_tree::H10Buckets"]},{"text":"impl&lt;AllocU32:&nbsp;<a class=\"trait\" href=\"brotli/writer/trait.Allocator.html\" title=\"trait brotli::writer::Allocator\">Allocator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/backward_references/struct.H2Sub.html\" title=\"struct brotli::enc::backward_references::H2Sub\">H2Sub</a>&lt;AllocU32&gt;","synthetic":false,"types":["brotli::enc::backward_references::H2Sub"]},{"text":"impl&lt;AllocU32:&nbsp;<a class=\"trait\" href=\"brotli/writer/trait.Allocator.html\" title=\"trait brotli::writer::Allocator\">Allocator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/backward_references/struct.H3Sub.html\" title=\"struct brotli::enc::backward_references::H3Sub\">H3Sub</a>&lt;AllocU32&gt;","synthetic":false,"types":["brotli::enc::backward_references::H3Sub"]},{"text":"impl&lt;AllocU32:&nbsp;<a class=\"trait\" href=\"brotli/writer/trait.Allocator.html\" title=\"trait brotli::writer::Allocator\">Allocator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/backward_references/struct.H4Sub.html\" title=\"struct brotli::enc::backward_references::H4Sub\">H4Sub</a>&lt;AllocU32&gt;","synthetic":false,"types":["brotli::enc::backward_references::H4Sub"]},{"text":"impl&lt;AllocU32:&nbsp;<a class=\"trait\" href=\"brotli/writer/trait.Allocator.html\" title=\"trait brotli::writer::Allocator\">Allocator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/backward_references/struct.H54Sub.html\" title=\"struct brotli::enc::backward_references::H54Sub\">H54Sub</a>&lt;AllocU32&gt;","synthetic":false,"types":["brotli::enc::backward_references::H54Sub"]},{"text":"impl&lt;SliceType:&nbsp;<a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"brotli/enc/interface/struct.FeatureFlagSliceType.html\" title=\"struct brotli::enc::interface::FeatureFlagSliceType\">FeatureFlagSliceType</a>&lt;SliceType&gt;","synthetic":false,"types":["brotli::enc::interface::FeatureFlagSliceType"]},{"text":"impl&lt;SliceType:&nbsp;<a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"brotli/enc/interface/struct.LiteralCommand.html\" title=\"struct brotli::enc::interface::LiteralCommand\">LiteralCommand</a>&lt;SliceType&gt;","synthetic":false,"types":["brotli::enc::interface::LiteralCommand"]},{"text":"impl <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"brotli/enc/interface/struct.SliceOffset.html\" title=\"struct brotli::enc::interface::SliceOffset\">SliceOffset</a>","synthetic":false,"types":["brotli::enc::interface::SliceOffset"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;T&gt; for <a class=\"struct\" href=\"brotli/ffi/alloc_util/struct.SendableMemoryBlock.html\" title=\"struct brotli::ffi::alloc_util::SendableMemoryBlock\">SendableMemoryBlock</a>&lt;T&gt;","synthetic":false,"types":["brotli::ffi::alloc_util::SendableMemoryBlock"]}];
implementors["brotli_decompressor"] = [{"text":"impl&lt;Ty:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"brotli_decompressor/trait.SliceWrapper.html\" title=\"trait brotli_decompressor::SliceWrapper\">SliceWrapper</a>&lt;Ty&gt; for <a class=\"struct\" href=\"brotli_decompressor/ffi/alloc_util/struct.MemoryBlock.html\" title=\"struct brotli_decompressor::ffi::alloc_util::MemoryBlock\">MemoryBlock</a>&lt;Ty&gt;","synthetic":false,"types":["brotli_decompressor::ffi::alloc_util::MemoryBlock"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()