<template>
    <Head>
        <title>Edit Soal Ujian - SITEDI</title>
        <link
            rel="shortcut icon"
            type="image/png"
            href="/assets/images/favicon.ico"
        />
    </Head>
    <div class="container-fluid mb-5 mt-5">
        <div class="row">
            <div class="col-md-12">
                <Link
                    :href="`/admin/exams/${exam.id}`"
                    class="btn btn-md btn-primary border-0 shadow mb-3"
                    type="button"
                    ><i class="fa fa-long-arrow-alt-left me-2"></i>
                    Kembali</Link
                >
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <h5>
                            <i class="fa fa-question-circle"></i> Edit Soal
                            Ujian
                        </h5>
                        <hr />
                        <form @submit.prevent="submit">
                            <div class="mb-4">
                                <label>File Gambar (optional)</label>
                                <div class="d-flex align-items-center">
                                    <input
                                        type="file"
                                        class="form-control"
                                        ref="formImage"
                                        accept=".jpg, .jpeg, .png"
                                        @change="selectedFile"
                                        @input="
                                            form.condition = 0,
                                            form.img = $event.target.files[0]
                                        "
                                    />
                                    <span>
                                        <i
                                            class="fas fa-times-circle"
                                            :style="{
                                                width: '24px',
                                                marginLeft: '8px',
                                                cursor: 'pointer',
                                            }"
                                            @click="removeSelect"
                                        ></i>
                                    </span>
                                </div>
                                <div
                                    v-if="imageUrl === null && form.img !== ''"
                                >
                                    <img
                                        :src="/storage/ + form.img"
                                        :style="{
                                            width: '30%',
                                            marginTop: '16px',
                                            borderRadius: '12px',
                                        }"
                                    />
                                </div>
                                <div v-else-if="imageUrl">
                                    <img
                                        :src="imageUrl"
                                        :style="{
                                            width: '30%',
                                            marginTop: '16px',
                                            borderRadius: '12px',
                                        }"
                                    />
                                </div>

                                <div
                                    v-if="errors.file"
                                    class="alert alert-danger mt-2"
                                >
                                    {{ errors.file }}
                                </div>
                                <div
                                    v-if="errors[0]"
                                    class="alert alert-danger mt-2"
                                >
                                    {{ errors[0] }}
                                </div>
                            </div>
                            <div class="table-responsive mb-4">
                                <table
                                    class="table table-bordered table-centered table-nowrap mb-0 rounded"
                                >
                                    <tbody>
                                        <tr>
                                            <td
                                                style="width: 20%"
                                                class="fw-bold"
                                            >
                                                Soal
                                            </td>
                                            <td>
                                                <Editor
                                                    api-key="no-api-key"
                                                    v-model="form.question"
                                                    :init="{
                                                        menubar: false,
                                                        plugins: 'lists',
                                                        toolbar:
                                                            'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist',
                                                    }"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="width: 20%"
                                                class="fw-bold"
                                            >
                                                Pilihan A
                                            </td>
                                            <td>
                                                <Editor
                                                    api-key="no-api-key"
                                                    v-model="form.option_1"
                                                    :init="{
                                                        height: 130,
                                                        menubar: false,
                                                        plugins: 'lists',
                                                        toolbar:
                                                            'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist',
                                                    }"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="width: 20%"
                                                class="fw-bold"
                                            >
                                                Pilihan B
                                            </td>
                                            <td>
                                                <Editor
                                                    api-key="no-api-key"
                                                    v-model="form.option_2"
                                                    :init="{
                                                        height: 130,
                                                        menubar: false,
                                                        plugins: 'lists',
                                                        toolbar:
                                                            'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist',
                                                    }"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="width: 20%"
                                                class="fw-bold"
                                            >
                                                Pilihan C
                                            </td>
                                            <td>
                                                <Editor
                                                    api-key="no-api-key"
                                                    v-model="form.option_3"
                                                    :init="{
                                                        height: 130,
                                                        menubar: false,
                                                        plugins: 'lists',
                                                        toolbar:
                                                            'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist',
                                                    }"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="width: 20%"
                                                class="fw-bold"
                                            >
                                                Pilihan D
                                            </td>
                                            <td>
                                                <Editor
                                                    api-key="no-api-key"
                                                    v-model="form.option_4"
                                                    :init="{
                                                        height: 130,
                                                        menubar: false,
                                                        plugins: 'lists',
                                                        toolbar:
                                                            'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist',
                                                    }"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="width: 20%"
                                                class="fw-bold"
                                            >
                                                Pilihan E
                                            </td>
                                            <td>
                                                <Editor
                                                    api-key="no-api-key"
                                                    v-model="form.option_5"
                                                    :init="{
                                                        height: 130,
                                                        menubar: false,
                                                        plugins: 'lists',
                                                        toolbar:
                                                            'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist',
                                                    }"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="width: 20%"
                                                class="fw-bold"
                                            >
                                                Jawaban Benar
                                            </td>
                                            <td>
                                                <select
                                                    class="form-control"
                                                    v-model="form.answer"
                                                >
                                                    <option value="1">A</option>
                                                    <option value="2">B</option>
                                                    <option value="3">C</option>
                                                    <option value="4">D</option>
                                                    <option value="5">E</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <button
                                type="submit"
                                class="btn btn-md btn-primary border-0 shadow me-2"
                            >
                                Simpan
                            </button>
                            <button
                                type="reset"
                                class="btn btn-md btn-warning border-0 shadow"
                            >
                                Reset
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import layout
import LayoutAdmin from "../../../Layouts/Admin.vue";

//import Heade and Link from Inertia
import { Head, Link } from "@inertiajs/inertia-vue3";

//import reactive from vue
import { reactive } from "vue";

//import inerita adapter
import { Inertia } from "@inertiajs/inertia";

//import sweet alert2
import Swal from "sweetalert2";

//import tinyMCE
import Editor from "@tinymce/tinymce-vue";

export default {
    //layout
    layout: LayoutAdmin,

    //register components
    components: {
        Head,
        Link,
        Editor,
    },

    //props
    props: {
        errors: Object,
        exam: Object,
        question: Object,
    },

    //inisialisasi composition API
    setup(props) {
        //define form with reactive
        const form = reactive({
            img: props.question.img,
            question: props.question.question,
            option_1: props.question.option_1,
            option_2: props.question.option_2,
            option_3: props.question.option_3,
            option_4: props.question.option_4,
            option_5: props.question.option_5,
            answer: props.question.answer,
            condition: 1,
            img2: props.question.img,
        });

        //method "submit"
        const submit = () => {
            
            // console.log(this.imageUrl);
            // console.log(props.question.img);
            // console.log(form.img);
            //send data to server

            // if(form.condition == 1) {
            //     return Swal.fire({
            //         title: "Gagal!",
            //         text: "Gambar belum dimasukkan!",
            //         icon: "warning",
            //         showConfirmButton: false,
            //         timer: 2000,
            //     });
            // } else 
            if (!form.option_5 && form.answer === "5") {
                return Swal.fire({
                    title: "Gagal!",
                    text: "Kunci jawaban tidak tersedia",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 2000,
                });
            } else {
                // Inertia.put(
                //     `/admin/exams/${props.exam.id}/questions/${props.question.id}/update`,
                //     {
                //         //data
                //         img: form.img,
                //         question: form.question,
                //         option_1: form.option_1,
                //         option_2: form.option_2,
                //         option_3: form.option_3,
                //         option_4: form.option_4,
                //         option_5: form.option_5,
                //         answer: form.answer,
                //     },
                //     {
                //         onSuccess: () => {
                //             //show success alert
                //             Swal.fire({
                //                 title: "Berhasil!",
                //                 text: "Soal Ujian Berhasil Dipdate!",
                //                 icon: "success",
                //                 showConfirmButton: false,
                //                 timer: 2000,
                //             });
                //         },
                //     }
                // );

                // console.log(form.condition);
                Inertia.post(
                    `/admin/exams/${props.exam.id}/questions/delImage`,
                    {
                        // img: form.img2
                    }
                )
                if(form.condition === 0){
                    Inertia.post(
                    `/admin/exams/${props.exam.id}/questions/update`,
                    {
                        //data
                        img: form.img,  
                        question: form.question,
                        option_1: form.option_1,
                        option_2: form.option_2,
                        option_3: form.option_3,
                        option_4: form.option_4,
                        option_5: form.option_5,
                        answer: form.answer,
                        img2:form.img2
                    },
                    {
                        onSuccess: () => {
                            //show success alert
                            Swal.fire({
                                title: "Berhasil!",
                                text: "Soal Ujian Berhasil Disimpan!",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 2000,
                            });

                            Inertia.post(
                                `/admin/exams/${props.exam.id}/questions/${props.question.id}/destroy`
                            );
                        },
                    }
                );
                }else if(form.condition === 3) {
                    Inertia.post(
                        `/admin/exams/${props.exam.id}/questions/updatenoimage`,
                        {
                            //data
                            img: null,  
                            question: form.question,
                            option_1: form.option_1,
                            option_2: form.option_2,
                            option_3: form.option_3,
                            option_4: form.option_4,
                            option_5: form.option_5,
                            answer: form.answer,
                            condition: 3,
                            img2: form.img2,
                        },
                        {
                            onSuccess: () => {
                                //show success alert
                                Swal.fire({
                                    title: "Berhasil!",
                                    text: "Soal Ujian Berhasil Disimpan!",
                                    icon: "success",
                                    showConfirmButton: false,
                                    timer: 2000,
                                });

                                Inertia.post(
                                    `/admin/exams/${props.exam.id}/questions/${props.question.id}/destroy`
                                );
                            },
                        }
                    );
                }else{
                    Inertia.post(
                    `/admin/exams/${props.exam.id}/questions/updatenoimage`,
                    {
                        //data
                        img: form.img2,  
                        question: form.question,
                        option_1: form.option_1,
                        option_2: form.option_2,
                        option_3: form.option_3,
                        option_4: form.option_4,
                        option_5: form.option_5,
                        answer: form.answer,
                        condition: 1
                        // img2:form.img2
                    },
                    {
                        onSuccess: () => {
                            //show success alert
                            Swal.fire({
                                title: "Berhasil!",
                                text: "Soal Ujian Berhasil Disimpan!",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 2000,
                            });

                            Inertia.post(
                                `/admin/exams/${props.exam.id}/questions/${props.question.id}/destroy`
                            );
                        },
                    }
                );
                }
                
            }
        };

        //return
        return {
            form,
            submit,
        };
    },
    data() {
        return {
            imageUrl: null
        };
    },
    methods: {
        selectedFile(event) {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imageUrl = e.target.result;
                };
                reader.readAsDataURL(selectedFile);
            }
            this.condition = 0;
        },
        removeSelect(props) {
            this.imageUrl = null;
            this.form.img = "";
            this.$refs.formImage.value = "";
            this.form.condition = 3; 
        },
    },
};
</script>

<style></style>
