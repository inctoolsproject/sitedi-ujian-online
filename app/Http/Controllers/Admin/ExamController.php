<?php

namespace App\Http\Controllers\Admin;

use App\Models\Exam;
use App\Models\Lesson;
use App\Models\Classroom;
use App\Models\Question;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Imports\QuestionsImport;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

class ExamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get exams
        $exams = Exam::when(request()->q, function ($exams) {
            $exams = $exams->where('title', 'like', '%' . request()->q . '%');
        })->with('lesson', 'classroom', 'questions')->latest()->paginate(5);

        //append query string to pagination links
        $exams->appends(['q' => request()->q]);

        //render with inertia
        return inertia('Admin/Exams/Index', [
            'exams' => $exams,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //get lessons
        $lessons = Lesson::all();

        //get classrooms
        $classrooms = Classroom::all();

        //render with inertia
        return inertia('Admin/Exams/Create', [
            'lessons' => $lessons,
            'classrooms' => $classrooms,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //validate request
        $request->validate([
            'title'             => 'required',
            'lesson_id'         => 'required|integer',
            'classroom_id'      => 'required|integer',
            'duration'          => 'required|integer',
            'description'       => 'required',
            'random_question'   => 'required',
            'random_answer'     => 'required',
            'show_answer'       => 'required',
        ]);

        //create exam
        Exam::create([
            'title'             => $request->title,
            'lesson_id'         => $request->lesson_id,
            'classroom_id'      => $request->classroom_id,
            'duration'          => $request->duration,
            'description'       => $request->description,
            'random_question'   => $request->random_question,
            'random_answer'     => $request->random_answer,
            'show_answer'       => $request->show_answer,
        ]);

        //redirect
        return redirect()->route('admin.exams.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        //get exam
        $exam = Exam::with('lesson', 'classroom')->findOrFail($id);

        //get relation questions with pagination
        $exam->setRelation('questions', $exam->questions()->paginate(5));

        //render with inertia
        return inertia('Admin/Exams/Show', [
            'exam' => $exam,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //get exam
        $exam = Exam::findOrFail($id);

        //get lessons
        $lessons = Lesson::all();

        //get classrooms
        $classrooms = Classroom::all();

        //render with inertia
        return inertia('Admin/Exams/Edit', [
            'exam' => $exam,
            'lessons' => $lessons,
            'classrooms' => $classrooms,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Exam $exam)
    {
        //validate request
        $request->validate([
            'title'             => 'required',
            'lesson_id'         => 'required|integer',
            'classroom_id'      => 'required|integer',
            'duration'          => 'required|integer',
            'description'       => 'required',
            'random_question'   => 'required',
            'random_answer'     => 'required',
            'show_answer'       => 'required',
        ]);

        //update exam
        $exam->update([
            'title'             => $request->title,
            'lesson_id'         => $request->lesson_id,
            'classroom_id'      => $request->classroom_id,
            'duration'          => $request->duration,
            'description'       => $request->description,
            'random_question'   => $request->random_question,
            'random_answer'     => $request->random_answer,
            'show_answer'       => $request->show_answer,
        ]);

        //redirect
        return redirect()->route('admin.exams.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //get exam
        $exam = Exam::findOrFail($id);

        //delete exam
        $exam->delete();

        //redirect
        return redirect()->route('admin.exams.index');
    }

    public function createQuestion(Exam $exam)
    {
        //render with inertia
        return inertia('Admin/Questions/Create', [
            'exam' => $exam,
        ]);
    }

    /**
     * storeQuestion
     *
     * @param  mixed $request
     * @param  mixed $exam
     * @return void
     */
    public function storeQuestion(Request $request, Exam $exam)
    {
        //validate request
        $request->validate([
            'img'               => 'nullable|mimes:jpg,jpeg,png|max:2048',
            'question'          => 'required',
            'option_1'          => 'required',
            'option_2'          => 'required',
            'option_3'          => 'required',
            'option_4'          => 'required',
            'option_5'          => '',
            'answer'            => 'required',
        ]);

        $image_path = '';
        if ($request->hasFile('img')) {
            $image_path = $request->file('img')->store('img', 'public');
        }

        //create question
        Question::create([
            'exam_id'           => $exam->id,
            'img'               => $image_path,
            'question'          => $request->question,
            'option_1'          => $request->option_1,
            'option_2'          => $request->option_2,
            'option_3'          => $request->option_3,
            'option_4'          => $request->option_4,
            'option_5'          => $request->option_5,
            'answer'            => $request->answer,
        ]);
        sleep(1);



        //redirect
        return redirect()->route('admin.exams.show', $exam->id);
    }

    public function editQuestion(Exam $exam, Question $question)
    {
        //render with inertia
        return inertia('Admin/Questions/Edit', [
            'exam' => $exam,
            'question' => $question,
        ]);
    }

    /**
     * updateQuestion
     *
     * @param  mixed $request
     * @param  mixed $exam
     * @param  mixed $question
     * @return void
     */
    public function updateQuestion(Request $request, Exam $exam, Question $question)
    {
        //validate request
        $data = $request->validate([
            'img'               => 'nullable|mimes:jpg,jpeg,png|max:2048',
            'question'          => 'required',
            'option_1'          => 'required',
            'option_2'          => 'required',
            'option_3'          => 'required',
            'option_4'          => 'required',
            'option_5'          => '',
            'answer'            => 'required',
        ]);

        $image_path = '';
        if ($request->img !== null && $request->img !== '') {
            $image_path = $request->file('img')->store('img', 'public');
            File::delete(storage_path('app/public/' . $request->img2));
            // $del_image = Question::find($image_path);
            // File::delete($del_image);
        }

        //create question
        Question::create([
            'exam_id'           => $exam->id,
            'img'               => $image_path,
            'question'          => $request->question,
            'option_1'          => $request->option_1,
            'option_2'          => $request->option_2,
            'option_3'          => $request->option_3,
            'option_4'          => $request->option_4,
            'option_5'          => $request->option_5,
            'answer'            => $request->answer,
        ]);

        // $question->update($data);
        sleep(1);

        //redirect
        return redirect()->route('admin.exams.show', $exam->id);
    }

    public function updateQuestionnoimage(Request $request, Exam $exam, Question $question)
    {
        //validate request
        $data = $request->validate([
            'img'               => 'nullable',
            'question'          => 'required',
            'option_1'          => 'required',
            'option_2'          => 'required',
            'option_3'          => 'required',
            'option_4'          => 'required',
            'option_5'          => '',
            'answer'            => 'required',
        ]);

        if ($request->condition == 3 && ($request->img2 !== null && $request->img2 !== '')) {
            File::delete(storage_path('app/public/' . $request->img2));
            // $del_image = Question::find($image_path);
            // File::delete($del_image);
        }

        //create question
        Question::create([
            'exam_id'           => $exam->id,
            'img'               => $request->img,
            'question'          => $request->question,
            'option_1'          => $request->option_1,
            'option_2'          => $request->option_2,
            'option_3'          => $request->option_3,
            'option_4'          => $request->option_4,
            'option_5'          => $request->option_5,
            'answer'            => $request->answer,
        ]);

        // $question->update($data);
        sleep(1);

        //redirect
        return redirect()->route('admin.exams.show', $exam->id);
    }

    public function deleteImage(Request $request) {
        $old_image = $request->img;
        File::delete(storage_path('app/public/' . $old_image));
        
    }

    // public function updateQuestion(Request $request, Exam $exam, Question $question)
    // {
    //     //validate request
    //     $request->validate([
    //         // 'img'               => 'nullable|mimes:jpg,jpeg,png|max:2048',
    //         'question'          => 'required',
    //         'option_1'          => 'required',
    //         'option_2'          => 'required',
    //         'option_3'          => 'required',
    //         'option_4'          => 'required',
    //         'option_5'          => '',
    //         'answer'            => 'required',
    //     ]);

    //     $input = $request->all();
    //     $file = $request->file('img');
    //     if($file) {
    //         $Question = Question::find($exam->id);
    //             $this->delete_image('storage/', $Question->img);
    //             $extension = $file->getClientOriginalExtension();
    //             $img = 'img/' . time() . '.' . $extension;
    //             $file->move('storage/', $img);

    //             $Question = array(
    //                 'img' => $img,
    //                 'question' => $request->question,
    //                 'option_1' => $request->option_1,
    //                 'option_2' => $request->option_2,
    //                 'option_3' => $request->option_3,
    //                 'option_4' => $request->option_4,
    //                 'option_5' => $request->option_5,
    //                 'answer' => $request->answer
    //             );
    //         Question::findOrfail($exam->id)->update($Question);
    //     }

    //     $Question = Question::find($exam->id);
    //     $Question->question = $request->get('question');
    //     $Question->option_1 = $request->get('option_1');
    //     $Question->option_2 = $request->get('option_2');
    //     $Question->option_3 = $request->get('option_3');
    //     $Question->option_4 = $request->get('option_4');
    //     $Question->option_5 = $request->get('option_5');
    //     $Question->answer = $request->get('answer');
    //     if ($file)
    //         $Question->img = $img;
    //     $Question->update();
    //     sleep(1);

    //     //redirect
    //     return redirect()->route('admin.exams.show', $exam->id);
    // }

    public function destroyQuestion(Request $request, Exam $exam, Question $question)
    {
        if($request->img !== null && $request->img !== '') {
            // delete image from storage
            File::delete(storage_path('app/public/' . $request->img));
        }
        //delete question
        $question->delete();


        //redirect
        return redirect()->route('admin.exams.show', $exam->id);
    }

    public function import(Exam $exam)
    {
        return inertia('Admin/Questions/Import', [
            'exam' => $exam
        ]);
    }

    /**
     * storeImport
     *
     * @param  mixed $request
     * @return void
     */
    public function storeImport(Request $request, Exam $exam)
    {
        $this->validate($request, [
            'file' => 'required|mimes:csv,xls,xlsx'
        ]);

        // import data
        Excel::import(new QuestionsImport(), $request->file('file'));

        //redirect
        return redirect()->route('admin.exams.show', $exam->id);
    }


    // Delete Image from Storage
    private function delete_image($dossier, $image)
    {
        $destination = $dossier . $image;
        if (File::exists($destination)) {
                if ($image != 'noimage.jpg') {
                        // Delete Image            
                        File::delete($destination);
                        error_log('File::delete');
                } else {
                        error_log('noimage else');
                }
        } else {
                error_log('File::existselse');
        }
    }
}
