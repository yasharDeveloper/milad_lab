<template>

<main>    

    <div direction="rtl" dir="rtl" style="direction: rtl">

        <div id="kt_app_body" data-kt-app-layout="dark-sidebar" data-kt-app-header-fixed="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-hoverable="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-toolbar-enabled="true" class="app-default">


            <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
                <!--begin::Content wrapper-->
                <div class="d-flex flex-column flex-column-fluid">
                    <!--begin::Toolbar-->
                    <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
                        <!--begin::Toolbar container-->
                        <div id="kt_app_toolbar_container" class="app-container container-xxl d-flex flex-stack">
                            <!--begin::Page title-->
                            <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                                <!--begin::Title-->
                                <h1 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">مدیریت</h1>
                                <!--end::Title-->
                                <!--begin::Breadcrumb-->
                                <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                                    <!--begin::آیتم-->
                                    <li class="breadcrumb-item text-muted">
                                        <a href="../../demo1/dist/index.html" class="text-muted text-hover-primary">خانه</a>
                                    </li>
                                    <!--end::آیتم-->
                                    <!--begin::آیتم-->
                                    <li class="breadcrumb-item">
                                        <span class="bullet bg-gray-400 w-5px h-2px"></span>
                                    </li>
                                    <!--end::آیتم-->
                                    <!--begin::آیتم-->
                                    <li class="breadcrumb-item text-muted">مدیریت</li>
                                    <!--end::آیتم-->
                                </ul>
                                <!--end::Breadcrumb-->
                            </div>

                        </div>
                    </div>

                    <div id="kt_app_content" class="app-content flex-column-fluid">
                        <!--begin::Content container-->
                        <div id="kt_app_content_container" class="app-container container-xxl">

                            <!--begin::Table Widget 3-->
                            <div class="card card-flush h-xl-100">
                                <!--begin::کارت header-->
                                <div class="card-header py-5">
                                        <!--begin:::Tabs-->
                                    <ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold">
                                        <!--begin:::Tab item-->
                                        <li class="nav-item m-2" style="border: 1px solid white; border-radius: 10px;">
                                            <a class="nav-link text-active-primary pb-4 card-title page-tab active" data-bs-toggle="tab" href="#kt_customer_view_overview_tab" style="padding: 8px" id="1">شغل ها</a>
                                        </li>
                                        <!--end:::Tab item-->
                                        <!--begin:::Tab item-->
                                        <li class="nav-item m-2" style="border: 1px solid white; border-radius: 10px">
                                            <a class="nav-link text-active-primary card-title pb-4 page-tab"  data-bs-toggle="tab" href="#kt_customer_view_overview_رویدادها_و_logs_tab" style="padding: 8px" id="2">حرفه ها</a>
                                        </li>
                                        <!--end:::Tab item-->
                                        <!--begin:::Tab item-->
                                        <!-- <li class="nav-item m-2" style="border: 1px solid white; border-radius: 10px">
                                            <a class="nav-link text-active-primary card-title pb-4 page-tab" data-kt-countup-tabs="true" data-bs-toggle="tab" href="#kt_customer_view_overview_statements" style=" padding: 8px" id="3">گروه ها</a>
                                        </li> -->
                                        <!--end:::Tab item-->
                                        <!--begin:::Tab item-->
                                        <!-- <li class="nav-item m-2" style="border: 1px solid white; border-radius: 10px">
                                            <a class="nav-link text-active-primary card-title pb-4 page-tab" data-kt-countup-tabs="true" data-bs-toggle="tab" href="#kt_customer_view_introduction" style=" padding: 8px" id="4">نحوه آشنایی</a>
                                        </li> -->
                                        <!--end:::Tab item-->
                                        <!--begin:::Tab item-->
                                        <!-- <li class="nav-item m-2" style="border: 1px solid white; border-radius: 10px">
                                            <a class="nav-link text-active-primary card-title pb-4 page-tab" data-kt-countup-tabs="true" data-bs-toggle="tab" href="#kt_customer_view_user_type" style="padding: 8px" id="5">نوع کاربری</a>
                                        </li> -->
                                        <!--end:::Tab item-->

                                        <!--begin:::Tab item-->
                                        <!-- <li class="nav-item m-2" style="border: 1px solid white; border-radius: 10px">
                                            <a class="nav-link text-active-primary card-title pb-4 page-tab"  data-kt-countup-tabs="true" data-bs-toggle="tab" href="#kt_customer_view_counseling_status"  style="padding: 8px" id="6">وضعیت جلسات مشاوره</a>
                                        </li> -->
                                        <!--end:::Tab item-->

                                        <!--begin:::Tab item-->
                                        <!-- <li class="nav-item m-2" style="border: 1px solid white; border-radius: 10px">
                                            <a class="nav-link text-active-primary card-title pb-4 page-tab" data-kt-countup-tabs="true" data-bs-toggle="tab" href="#kt_customer_view_admins" style="padding: 8px" id="7">ادمین ها</a>
                                        </li>
                                        <li class="nav-item m-2" style="border: 1px solid white; border-radius: 10px">
                                            <a class="nav-link text-active-primary card-title pb-4 page-tab" data-kt-countup-tabs="true" data-bs-toggle="tab" href="#kt_view_products" style="padding: 8px" id="8">دوره ها</a>
                                        </li> -->
                                    </ul>

                                </div>
                                <!--end::کارت header-->
                                <!--begin::کارت body-->
                                <div class="card-body" style="padding-top: unset">
                                    <!--begin::شهریورrator-->


                                    <!--begin:::Tab content-->
                                    <div class="tab-content" id="myTabContent">
                                        <!--begin:::Tab pane-->
                                        <div class="tab-pane fade show active" id="kt_customer_view_overview_tab" role="tabpanel">
                                            

                                            <!--begin::کارت body-->
                                            <div class="card-body tab-body" tab-index="1">
                                                <!--begin::Tab Content-->
                                                <div class="tab-content">
                                                    <!--begin::Tab panel-->
                                                    <div id="kt_activity_today" class="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_activity_today_tab">
                                                        <!--begin::timeline-->
                                                        <div class="timeline">
                                                            <!--begin::timeline item-->
                                                            <div class="timeline-item">
                                                                <!--begin::timeline line-->
                                                                <div class="timeline-line w-40px"></div>
                                                                <!--end::timeline line-->
                                                                <!--begin::timeline icon-->
                                                                <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
                                                                    <div class="symbol-label bg-light">
                                                                        <i class="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                                                                            <span class="path1"></span>
                                                                            <span class="path2"></span>
                                                                            <span class="path3"></span>
                                                                        </i>
                                                                    </div>
                                                                </div>
                                                                <!--end::timeline icon-->
                                                                <!--begin::timeline content-->
                                                                <div class="timeline-content mt-n1">
                                                                    <!--begin::timeline heading-->
                                                                    <div class="d-flex justify-content-between pe-3 mb-5">
                                                                        <!--begin::Title-->
                                                                        <div class="fs-5 fw-semibold mb-2 my-title">لیست شغل ها</div>
                                                                        <!--end::Title-->

                                                                        <!--begin::توضیحات-->
                                                                        <!-- <div class="d-flex align-items-center mt-1 fs-6"> -->
                                                                        
                                                                            <!--begin::Info-->
                                                                            <!-- <div class="text-muted me-2 fs-7">اضافه شده در ساعت 4:12</div> -->
                                                                            <!--end::Info-->
                                                                            <!--begin::user-->
                                                                            <!-- <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                                                <img src="assets/media/avatars/300-14.jpg" alt="img" />
                                                                            </div> -->
                                                                            <!--end::user-->
                                                                        <!-- </div> -->
                                                                        <!--end::توضیحات-->

                                                                    
                                                                        <div class="pe-3">
                                                                            <div class="d-flex align-items-center position-relative my-1">
                                                                                <a href="#">
                                                                                    <!-- <button type="submit" class="btn btn-sm fw-bold btn-primary" style="padding-left: 30px;padding-right: 30px">افزودن حرفه ها</button> -->
                                                                                    <a href="#" class="btn btn-primary er fs-6 px-8 py-4 " data-bs-toggle="modal" data-bs-target="#kt_modal_new_job">افزودن شغل</a>
                                                                                </a>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <!--end::timeline heading-->
                                                                    <!--begin::timeline details-->
                                                                    <div class="overflow-auto pb-5">
                                                                    
                                                                        <!--begin::Table-->
                                                                        <table class="table align-middle table-row-dashed fs-6 gy-5" id="jobs-table">
                                                                            <thead>
                                                                                <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">

                                                                                    <th class="min-w-100px" style="text-align: right">شناسه</th>
                                                                                    <th class="min-w-175px" style="text-align: right">نام شغل</th>
                                                                                    <th class="min-w-175px" style="text-align: right">عملیات</th>
                                                                            
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody class="fw-semibold text-gray-600" id="jobsList">
                                                                            
                                                                                    <tr>
                                                                                        <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                        <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                        <td data-kt-ecommerce-order-filter="order_id">
                                                                                            <div class="d-flex flex-shrink-0">
                                                                                                <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 delete-item-job" jobID="">
                                                                                                    <i class="ki-duotone ki-switch fs-2">
                                                                                                        <span class="path1"></span>
                                                                                                        <span class="path2"></span>
                                                                                                    </i>
                                                                                                </a>
                                                                                                <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 edit-item-job" data-bs-toggle="modal" data-bs-target="#kt_modal_edit_job" job-id="">
                                                                                                    <i class="ki-duotone ki-pencil fs-2">
                                                                                                        <span class="path1"></span>
                                                                                                        <span class="path2"></span>
                                                                                                    </i>
                                                                                                </a>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                            
                                                                            </tbody>
                                                                        </table>
                                                                        <!--end::Table-->


                                                                    </div>
                                                                    <!--end::timeline details-->
                                                                </div>
                                                                <!--end::timeline content-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 

                                        </div>
                                        <!--end:::Tab pane-->
                                        

                                        <!--begin:::Tab pane-->
                                        <div class="tab-pane fade" id="kt_customer_view_overview_رویدادها_و_logs_tab" role="tabpanel">   
                                            <div class="card-body tab-body" tab-index="1">
                                                <!--begin::Tab Content-->
                                                <div class="tab-content">
                                                    <!--begin::Tab panel-->
                                                    <div id="kt_activity_today" class="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_activity_today_tab">
                                                        <!--begin::timeline-->
                                                        <div class="timeline">
                                                            <!--begin::timeline item-->
                                                            <div class="timeline-item">
                                                                <!--begin::timeline line-->
                                                                <div class="timeline-line w-40px"></div>
                                                                <!--end::timeline line-->
                                                                <!--begin::timeline icon-->
                                                                <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
                                                                    <div class="symbol-label bg-light">
                                                                        <i class="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                                                                            <span class="path1"></span>
                                                                            <span class="path2"></span>
                                                                            <span class="path3"></span>
                                                                        </i>
                                                                    </div>
                                                                </div>
                                                                <!--end::timeline icon-->
                                                                <!--begin::timeline content-->
                                                                <div class="timeline-content mt-n1">
                                                                    <!--begin::timeline heading-->
                                                                    <div class="d-flex justify-content-between pe-3 mb-5">
                                                                        <!--begin::Title-->
                                                                        <div class="fs-5 fw-semibold mb-2 my-title">لیست حرفه ها</div>
                                                                        <!--end::Title-->
                                                                        <!--begin::توضیحات-->
                                                                        <div class="d-flex align-items-center mt-1 fs-6">
                                                                            <!--begin::Info-->
                                                                            <!-- <div class="text-muted me-2 fs-7">اضافه شده در ساعت 4:12</div> -->
                                                                            <!--end::Info-->
                                                                            <!--begin::user-->
                                                                            <!-- <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                                                <img src="assets/media/avatars/300-14.jpg" alt="img" />
                                                                            </div> -->
                                                                            <!--end::user-->
                                                                        </div>
                                                                        <!--end::توضیحات-->

                                                                    
                                                                        <div class="pe-3 mb-5">
                                                                            <div class="d-flex align-items-center position-relative my-1">
                                                                                <a href="#">
                                                                                    <!-- <button type="submit" class="btn btn-sm fw-bold btn-primary" style="padding-left: 30px;padding-right: 30px">افزودن حرفه ها</button> -->
                                                                                    <a href="#" class="btn btn-primary er fs-6 px-8 py-4" data-bs-toggle="modal" data-bs-target="#kt_modal_new_profession">افزودن حرفه</a>
                                                                                </a>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <!--end::timeline heading-->
                                                                    <!--begin::timeline details-->
                                                                    <div class="overflow-auto pb-5">
                                                                    
                                                                        <!--begin::Table-->
                                                                        <table class="table align-middle table-row-dashed fs-6 gy-5" id="professions-table">
                                                                            <thead>
                                                                            <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">

                                                                                <th class="min-w-100px" style="text-align: right">شناسه</th>
                                                                                <th class="min-w-175px" style="text-align: right">نام حرفه</th>
                                                                                <th class="min-w-175px" style="text-align: right">عملیات</th>
                                                                        
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody class="fw-semibold text-gray-600" id="jobsList">
                                                                            
                                                                                    <tr>
                                                                                        <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                        <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                        <td data-kt-ecommerce-order-filter="order_id">
                                                                                            <div class="d-flex flex-shrink-0">
                                                                                                <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 delete-item-profession" professionID="">
                                                                                                    <i class="ki-duotone ki-switch fs-2">
                                                                                                        <span class="path1"></span>
                                                                                                        <span class="path2"></span>
                                                                                                    </i>
                                                                                                </a>
                                                                                                <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 edit-item-profession" data-bs-toggle="modal" data-bs-target="#kt_modal_edit_profession" profession-id="">
                                                                                                    <i class="ki-duotone ki-pencil fs-2">
                                                                                                        <span class="path1"></span>
                                                                                                        <span class="path2"></span>
                                                                                                    </i>
                                                                                                </a>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                            
                                                                            </tbody>
                                                                        </table>
                                                                        <!--end::Table-->


                                                                    </div>
                                                                    <!--end::timeline details-->
                                                                </div>
                                                                <!--end::timeline content-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                            <!--end:::Tab pane-->


                                        <!--begin:::Tab pane-->
                                        <div class="tab-pane fade" id="kt_customer_view_overview_statements" role="tabpanel">
                                            

                                            <div class="card-body tab-body" tab-index="1">
                                                <!--begin::Tab Content-->
                                                <div class="tab-content">
                                                    <!--begin::Tab panel-->
                                                    <div id="kt_activity_today" class="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_activity_today_tab">
                                                        <!--begin::timeline-->
                                                        <div class="timeline">
                                                            <!--begin::timeline item-->
                                                            <div class="timeline-item">
                                                                <!--begin::timeline line-->
                                                                <div class="timeline-line w-40px"></div>
                                                                <!--end::timeline line-->
                                                                <!--begin::timeline icon-->
                                                                <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
                                                                    <div class="symbol-label bg-light">
                                                                        <i class="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                                                                            <span class="path1"></span>
                                                                            <span class="path2"></span>
                                                                            <span class="path3"></span>
                                                                        </i>
                                                                    </div>
                                                                </div>
                                                                <!--end::timeline icon-->
                                                                <!--begin::timeline content-->
                                                                <div class="timeline-content mt-n1">
                                                                    <!--begin::timeline heading-->
                                                                    <div class="d-flex justify-content-between pe-3 mb-5">
                                                                        <!--begin::Title-->
                                                                        <div class="fs-5 fw-semibold mb-2 my-title">لیست گروه ها</div>
                                                                        <!--end::Title-->
                                                                        <!--begin::توضیحات-->
                                                                        <div class="d-flex align-items-center mt-1 fs-6">
                                                                            <!--begin::Info-->
                                                                            <!-- <div class="text-muted me-2 fs-7">اضافه شده در ساعت 4:12</div> -->
                                                                            <!--end::Info-->
                                                                            <!--begin::user-->
                                                                            <!-- <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                                                <img src="assets/media/avatars/300-14.jpg" alt="img" />
                                                                            </div> -->
                                                                            <!--end::user-->
                                                                        </div>
                                                                        <!--end::توضیحات-->

                                                                    
                                                                        <div class="pe-3 mb-5">
                                                                            <div class="d-flex align-items-center position-relative my-1">
                                                                                <a href="#">
                                                                                    <!-- <button type="submit" class="btn btn-sm fw-bold btn-primary" style="padding-left: 30px;padding-right: 30px">افزودن حرفه ها</button> -->
                                                                                    <a href="#" class="btn btn-primary er fs-6 px-8 py-4" data-bs-toggle="modal" data-bs-target="#kt_modal_new_group">افزودن گروه</a>
                                                                                </a>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <!--end::timeline heading-->
                                                                    <!--begin::timeline details-->
                                                                    <div class="overflow-auto pb-5">
                                                                    
                                                                        <!--begin::Table-->
                                                                        <table class="table align-middle table-row-dashed fs-6 gy-5" id="groups-table">
                                                                            <thead>
                                                                            <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">

                                                                                <th class="min-w-100px" style="text-align: right">شناسه</th>
                                                                                <th class="min-w-175px" style="text-align: right">نام گروه</th>
                                                                                <th class="min-w-175px" style="text-align: right">عملیات</th>
                                                                        
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody class="fw-semibold text-gray-600" id="jobsList">
                                                                            
                                                                                    <tr>
                                                                                        <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                        <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                        <td data-kt-ecommerce-order-filter="order_id">
                                                                                            <div class="d-flex flex-shrink-0">
                                                                                                <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 delete-item-group" groupID="">
                                                                                                    <i class="ki-duotone ki-switch fs-2">
                                                                                                        <span class="path1"></span>
                                                                                                        <span class="path2"></span>
                                                                                                    </i>
                                                                                                </a>
                                                                                                <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 edit-item-group" data-bs-toggle="modal" data-bs-target="#kt_modal_edit_group" group-id="">
                                                                                                    <i class="ki-duotone ki-pencil fs-2">
                                                                                                        <span class="path1"></span>
                                                                                                        <span class="path2"></span>
                                                                                                    </i>
                                                                                                </a>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                            
                                                                            </tbody>
                                                                        </table>
                                                                        <!--end::Table-->


                                                                    </div>
                                                                    <!--end::timeline details-->
                                                                </div>
                                                                <!--end::timeline content-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                                
                                            
                                            
                                        </div>
                                        <!--end:::Tab pane-->


                                        <!--begin:::Tab pane-->
                                        <div class="tab-pane fade" id="kt_customer_view_introduction" role="tabpanel">
                                            

                                            <div class="card-body tab-body" tab-index="1">
                                                <!--begin::Tab Content-->
                                                <div class="tab-content">
                                                    <!--begin::Tab panel-->
                                                    <div id="kt_activity_today" class="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_activity_today_tab">
                                                        <!--begin::timeline-->
                                                        <div class="timeline">
                                                            <!--begin::timeline item-->
                                                            <div class="timeline-item">
                                                                <!--begin::timeline line-->
                                                                <div class="timeline-line w-40px"></div>
                                                                <!--end::timeline line-->
                                                                <!--begin::timeline icon-->
                                                                <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
                                                                    <div class="symbol-label bg-light">
                                                                        <i class="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                                                                            <span class="path1"></span>
                                                                            <span class="path2"></span>
                                                                            <span class="path3"></span>
                                                                        </i>
                                                                    </div>
                                                                </div>
                                                                <!--end::timeline icon-->
                                                                <!--begin::timeline content-->
                                                                <div class="timeline-content mt-n1">
                                                                    <!--begin::timeline heading-->
                                                                    <div class="d-flex justify-content-between pe-3 mb-5">
                                                                        <!--begin::Title-->
                                                                        <div class="fs-5 fw-semibold mb-2 my-title">لیست نحوه آشنایی</div>
                                                                        <!--end::Title-->
                                                                        <!--begin::توضیحات-->
                                                                        <div class="d-flex align-items-center mt-1 fs-6">
                                                                            <!--begin::Info-->
                                                                            <!-- <div class="text-muted me-2 fs-7">اضافه شده در ساعت 4:12</div> -->
                                                                            <!--end::Info-->
                                                                            <!--begin::user-->
                                                                            <!-- <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                                                <img src="assets/media/avatars/300-14.jpg" alt="img" />
                                                                            </div> -->
                                                                            <!--end::user-->
                                                                        </div>
                                                                        <!--end::توضیحات-->

                                                                    
                                                                        <div class="pe-3 mb-5">
                                                                            <div class="d-flex align-items-center position-relative my-1">
                                                                                <a href="#">
                                                                                    <!-- <button type="submit" class="btn btn-sm fw-bold btn-primary" style="padding-left: 30px;padding-right: 30px">افزودن حرفه ها</button> -->
                                                                                    <a href="#" class="btn btn-primary er fs-6 px-8 py-4" data-bs-toggle="modal" data-bs-target="#kt_modal_new_introduction">افزودن نحوه آشنایی</a>
                                                                                </a>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <!--end::timeline heading-->
                                                                    <!--begin::timeline details-->
                                                                    <div class="overflow-auto pb-5">
                                                                    
                                                                        <!--begin::Table-->
                                                                        <table class="table align-middle table-row-dashed fs-6 gy-5" id="introductions-table">
                                                                            <thead>
                                                                            <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">

                                                                                <th class="min-w-100px" style="text-align: right">شناسه</th>
                                                                                <th class="min-w-175px" style="text-align: right">نحوه آشنایی (انگلیسی)</th>
                                                                                <th class="min-w-175px" style="text-align: right">نحوه آشنایی (فارسی)</th>
                                                                                <th class="min-w-175px" style="text-align: right">عملیات</th>
                                                                        
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody class="fw-semibold text-gray-600" id="jobsList">
                                                                            
                                                                                    <tr>
                                                                                        <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                        <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                        <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                        <td data-kt-ecommerce-order-filter="order_id">
                                                                                            <div class="d-flex flex-shrink-0">
                                                                                                <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 delete-item-introduction" introduction-id="">
                                                                                                    <i class="ki-duotone ki-switch fs-2">
                                                                                                        <span class="path1"></span>
                                                                                                        <span class="path2"></span>
                                                                                                    </i>
                                                                                                </a>
                                                                                                <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 edit-item-introduction" data-bs-toggle="modal" data-bs-target="#kt_modal_edit_introduction" introduction-id="">
                                                                                                    <i class="ki-duotone ki-pencil fs-2">
                                                                                                        <span class="path1"></span>
                                                                                                        <span class="path2"></span>
                                                                                                    </i>
                                                                                                </a>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                            
                                                                            </tbody>
                                                                        </table>
                                                                        <!--end::Table-->


                                                                    </div>
                                                                    <!--end::timeline details-->
                                                                </div>
                                                                <!--end::timeline content-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                                
                                            
                                            
                                        </div>
                                        <!--end:::Tab pane-->

                                        <!--begin:::Tab pane-->
                                        <div class="tab-pane fade" id="kt_customer_view_user_type" role="tabpanel">
                                            

                                            <div class="card-body tab-body" tab-index="1">
                                                <!--begin::Tab Content-->
                                                <div class="tab-content">
                                                    <!--begin::Tab panel-->
                                                    <div id="kt_activity_today" class="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_activity_today_tab">
                                                        <!--begin::timeline-->
                                                        <div class="timeline">
                                                            <!--begin::timeline item-->
                                                            <div class="timeline-item">
                                                                <!--begin::timeline line-->
                                                                <div class="timeline-line w-40px"></div>
                                                                <!--end::timeline line-->
                                                                <!--begin::timeline icon-->
                                                                <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
                                                                    <div class="symbol-label bg-light">
                                                                        <i class="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                                                                            <span class="path1"></span>
                                                                            <span class="path2"></span>
                                                                            <span class="path3"></span>
                                                                        </i>
                                                                    </div>
                                                                </div>
                                                                <!--end::timeline icon-->
                                                                <!--begin::timeline content-->
                                                                <div class="timeline-content mt-n1">
                                                                    <!--begin::timeline heading-->
                                                                    <div class="d-flex justify-content-between pe-3 mb-5">
                                                                        <!--begin::Title-->
                                                                        <div class="fs-5 fw-semibold mb-2 my-title">لیست نوع کاربری</div>
                                                                        <!--end::Title-->
                                                                        <!--begin::توضیحات-->
                                                                        <div class="d-flex align-items-center mt-1 fs-6">
                                                                            <!--begin::Info-->
                                                                            <!-- <div class="text-muted me-2 fs-7">اضافه شده در ساعت 4:12</div> -->
                                                                            <!--end::Info-->
                                                                            <!--begin::user-->
                                                                            <!-- <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                                                <img src="assets/media/avatars/300-14.jpg" alt="img" />
                                                                            </div> -->
                                                                            <!--end::user-->
                                                                        </div>
                                                                        <!--end::توضیحات-->

                                                                    
                                                                        <div class="pe-3 mb-5">
                                                                            <div class="d-flex align-items-center position-relative my-1">
                                                                                <a href="#">
                                                                                    <!-- <button type="submit" class="btn btn-sm fw-bold btn-primary" style="padding-left: 30px;padding-right: 30px">افزودن حرفه ها</button> -->
                                                                                    <a href="#" class="btn btn-primary er fs-6 px-8 py-4" data-bs-toggle="modal" data-bs-target="#kt_modal_new_user_type">افزودن نوع کاربری</a>
                                                                                </a>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <!--end::timeline heading-->
                                                                    <!--begin::timeline details-->
                                                                    <div class="overflow-auto pb-5">
                                                                    
                                                                        <!--begin::Table-->
                                                                        <table class="table align-middle table-row-dashed fs-6 gy-5" id="user-type-table">
                                                                            <thead>
                                                                            <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">

                                                                                <th class="min-w-100px" style="text-align: right">شناسه</th>
                                                                                <th class="min-w-175px" style="text-align: right">نام</th>
                                                                                <th class="min-w-175px" style="text-align: right">عملیات</th>
                                                                        
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody class="fw-semibold text-gray-600" id="jobsList">
                                                                            
                                                                                    <tr>
                                                                                        <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                        <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                        <td data-kt-ecommerce-order-filter="order_id">
                                                                                            <div class="d-flex flex-shrink-0">
                                                                                                <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 delete-item-user-type" user-type-id="">
                                                                                                    <i class="ki-duotone ki-switch fs-2">
                                                                                                        <span class="path1"></span>
                                                                                                        <span class="path2"></span>
                                                                                                    </i>
                                                                                                </a>
                                                                                                <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 edit-item-user-type" data-bs-toggle="modal" data-bs-target="#kt_modal_edit_user_type" user-type-id="">
                                                                                                    <i class="ki-duotone ki-pencil fs-2">
                                                                                                        <span class="path1"></span>
                                                                                                        <span class="path2"></span>
                                                                                                    </i>
                                                                                                </a>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                            
                                                                            </tbody>
                                                                        </table>
                                                                        <!--end::Table-->


                                                                    </div>
                                                                    <!--end::timeline details-->
                                                                </div>
                                                                <!--end::timeline content-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                                
                                            
                                            
                                        </div>
                                        <!--end:::Tab pane-->

                                        <!--begin:::Tab pane-->
                                        <div class="tab-pane fade" id="kt_customer_view_counseling_status" role="tabpanel">
                                            

                                            <div class="card-body tab-body" tab-index="1">
                                                <!--begin::Tab Content-->
                                                <div class="tab-content">
                                                    <!--begin::Tab panel-->
                                                    <div id="kt_activity_today" class="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_activity_today_tab">
                                                        <!--begin::timeline-->
                                                        <div class="timeline">
                                                            <!--begin::timeline item-->
                                                            <div class="timeline-item">
                                                                <!--begin::timeline line-->
                                                                <div class="timeline-line w-40px"></div>
                                                                <!--end::timeline line-->
                                                                <!--begin::timeline icon-->
                                                                <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
                                                                    <div class="symbol-label bg-light">
                                                                        <i class="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                                                                            <span class="path1"></span>
                                                                            <span class="path2"></span>
                                                                            <span class="path3"></span>
                                                                        </i>
                                                                    </div>
                                                                </div>
                                                                <!--end::timeline icon-->
                                                                <!--begin::timeline content-->
                                                                <div class="timeline-content mt-n1">
                                                                    <!--begin::timeline heading-->
                                                                    <div class="d-flex justify-content-between pe-3 mb-5">
                                                                        <!--begin::Title-->
                                                                        <div class="fs-5 fw-semibold mb-2 my-title">لیست وضعیت جلسات مشاوره</div>
                                                                        <!--end::Title-->
                                                                        <!--begin::توضیحات-->
                                                                        <div class="d-flex align-items-center mt-1 fs-6">
                                                                            <!--begin::Info-->
                                                                            <!-- <div class="text-muted me-2 fs-7">اضافه شده در ساعت 4:12</div> -->
                                                                            <!--end::Info-->
                                                                            <!--begin::user-->
                                                                            <!-- <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                                                <img src="assets/media/avatars/300-14.jpg" alt="img" />
                                                                            </div> -->
                                                                            <!--end::user-->
                                                                        </div>
                                                                        <!--end::توضیحات-->

                                                                    
                                                                        <div class="pe-3 mb-5">
                                                                            <div class="d-flex align-items-center position-relative my-1">
                                                                                <a href="#">
                                                                                    <!-- <button type="submit" class="btn btn-sm fw-bold btn-primary" style="padding-left: 30px;padding-right: 30px">افزودن حرفه ها</button> -->
                                                                                    <a href="#" class="btn btn-primary er fs-6 px-8 py-4" data-bs-toggle="modal" data-bs-target="#kt_modal_new_counsel_status">افزودن وضعیت</a>
                                                                                </a>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <!--end::timeline heading-->
                                                                    <!--begin::timeline details-->
                                                                    <div class="overflow-auto pb-5">
                                                                    
                                                                        <!--begin::Table-->
                                                                        <table class="table align-middle table-row-dashed fs-6 gy-5" id="counsel-status-table">
                                                                            <thead>
                                                                            <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">

                                                                                <th class="min-w-100px" style="text-align: right">شناسه</th>
                                                                                <th class="min-w-175px" style="text-align: right">نام</th>
                                                                                <th class="min-w-175px" style="text-align: right">عملیات</th>
                                                                        
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody class="fw-semibold text-gray-600" id="jobsList">
                                                                            
                                                                                    <tr>
                                                                                        <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                        <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                        <td data-kt-ecommerce-order-filter="order_id">
                                                                                            <div class="d-flex flex-shrink-0">
                                                                                                <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 delete-item-counsel-status" counsel-status-id="">
                                                                                                    <i class="ki-duotone ki-switch fs-2">
                                                                                                        <span class="path1"></span>
                                                                                                        <span class="path2"></span>
                                                                                                    </i>
                                                                                                </a>
                                                                                                <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 edit-item-counsel-status" data-bs-toggle="modal" data-bs-target="#kt_modal_edit_counsel_status" counsel-status-id="">
                                                                                                    <i class="ki-duotone ki-pencil fs-2">
                                                                                                        <span class="path1"></span>
                                                                                                        <span class="path2"></span>
                                                                                                    </i>
                                                                                                </a>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                            
                                                                            </tbody>
                                                                        </table>
                                                                        <!--end::Table-->


                                                                    </div>
                                                                    <!--end::timeline details-->
                                                                </div>
                                                                <!--end::timeline content-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                                
                                            
                                            
                                        </div>
                                        <!--end:::Tab pane-->


                                        <!--begin:::Tab pane-->
                                        <div class="tab-pane fade" id="kt_customer_view_admins" role="tabpanel">
                                            

                                            <div class="card-body tab-body" tab-index="1">
                                                <!--begin::Tab Content-->
                                                <div class="tab-content">
                                                    <!--begin::Tab panel-->
                                                    <div id="kt_activity_today" class="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_activity_today_tab">
                                                        <!--begin::timeline-->
                                                        <div class="timeline">
                                                            <!--begin::timeline item-->
                                                            <div class="timeline-item">
                                                                <!--begin::timeline line-->
                                                                <div class="timeline-line w-40px"></div>
                                                                <!--end::timeline line-->
                                                                <!--begin::timeline icon-->
                                                                <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
                                                                    <div class="symbol-label bg-light">
                                                                        <i class="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                                                                            <span class="path1"></span>
                                                                            <span class="path2"></span>
                                                                            <span class="path3"></span>
                                                                        </i>
                                                                    </div>
                                                                </div>
                                                                <!--end::timeline icon-->
                                                                <!--begin::timeline content-->
                                                                <div class="timeline-content mt-n1">
                                                                    <!--begin::timeline heading-->
                                                                    <div class="d-flex justify-content-between pe-3 mb-5">
                                                                        <!--begin::Title-->
                                                                        <div class="fs-5 fw-semibold mb-2 my-title">لیست ادمین های سامانه</div>
                                                                        <!--end::Title-->
                                                                        <!--begin::توضیحات-->
                                                                        <div class="d-flex align-items-center mt-1 fs-6">
                                                                            <!--begin::Info-->
                                                                            <!-- <div class="text-muted me-2 fs-7">اضافه شده در ساعت 4:12</div> -->
                                                                            <!--end::Info-->
                                                                            <!--begin::user-->
                                                                            <!-- <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                                                <img src="assets/media/avatars/300-14.jpg" alt="img" />
                                                                            </div> -->
                                                                            <!--end::user-->
                                                                        </div>
                                                                        <!--end::توضیحات-->
                                                                        
                                                                        
                                                                        <div class="pe-3 mb-5">
                                                                            <div class="d-flex align-items-center position-relative my-1">
                                                                                <a href="#">
                                                                                    <!-- <button type="submit" class="btn btn-sm fw-bold btn-primary" style="padding-left: 30px;padding-right: 30px">افزودن حرفه ها</button> -->
                                                                                    <a href="#" class="btn btn-primary er fs-6 px-8 py-4" data-bs-toggle="modal" data-bs-target="#kt_modal_new_admin">افزودن ادمین</a>
                                                                                
                                                                                </a>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <!--end::timeline heading-->
                                                                    <!--begin::timeline details-->
                                                                    <div class="overflow-auto pb-5">
                                                                    
                                                                        <!--begin::Table-->
                                                                        <table class="table align-middle table-row-dashed fs-6 gy-5" id="admins-table">
                                                                            <thead>
                                                                            <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">

                                                                                <th class="min-w-100px" style="text-align: right">شناسه</th>
                                                                                <th class="min-w-175px" style="text-align: right">نام</th>
                                                                                <th class="min-w-175px" style="text-align: right">نوع</th>
                                                                                <th class="min-w-175px" style="text-align: right">عملیات</th>
                                                                        
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody class="fw-semibold text-gray-600" id="jobsList">
                                                                            
                                                                                        <tr>
                                                                                            <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                            <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                            <td data-kt-ecommerce-order-filter="order_id">
                                                                                                    ادمین
                                                                                            </td>
                                                                                            
                                                                                                <td data-kt-ecommerce-order-filter="order_id">
                                                                                                    <div class="d-flex flex-shrink-0">

                                                                                                        <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 edit-item-admin" data-bs-toggle="modal" data-bs-target="#kt_modal_edit_admin" admin-id="">
                                                                                                            <i class="ki-duotone ki-pencil fs-2">
                                                                                                                <span class="path1"></span>
                                                                                                                <span class="path2"></span>
                                                                                                            </i>
                                                                                                        </a>

                                                                                                        <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 reset-password-item-admin" data-bs-toggle="modal" data-bs-target="#kt_modal_reset_password" admin-id="">
                                                                                                            <i class="ki-duotone ki-key fs-2">
                                                                                                                <span class="path1"></span>
                                                                                                                <span class="path2"></span>
                                                                                                            </i>
                                                                                                        </a>

                                                                                                        <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 permissions-item-admin" data-bs-toggle="modal" data-bs-target="#kt_modal_set_permissions" admin-id="">
                                                                                                            <i class="ki-duotone ki-setting-4 fs-2">
                                                                                                                <span class="path1"></span>
                                                                                                                <span class="path2"></span>
                                                                                                            </i>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                </td>
                                                                                        </tr>
                                                                            
                                                                            </tbody>
                                                                        </table>
                                                                        <!--end::Table-->


                                                                    </div>
                                                                    <!--end::timeline details-->
                                                                </div>
                                                                <!--end::timeline content-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                                
                                            
                                            
                                        </div>
                                        <!--end:::Tab pane-->
                                        <!--begin:::Tab pane-->
                                        <div class="tab-pane fade" id="kt_view_products" role="tabpanel">


                                            <div class="card-body tab-body" tab-index="1">
                                                <!--begin::Tab Content-->
                                                <div class="tab-content">
                                                    <!--begin::Tab panel-->
                                                    <div id="kt_activity_today" class="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_activity_today_tab">
                                                        <!--begin::timeline-->
                                                        <div class="timeline">
                                                            <!--begin::timeline item-->
                                                            <div class="timeline-item">
                                                                <!--begin::timeline line-->
                                                                <div class="timeline-line w-40px"></div>
                                                                <!--end::timeline line-->
                                                                <!--begin::timeline icon-->
                                                                <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
                                                                    <div class="symbol-label bg-light">
                                                                        <i class="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                                                                            <span class="path1"></span>
                                                                            <span class="path2"></span>
                                                                            <span class="path3"></span>
                                                                        </i>
                                                                    </div>
                                                                </div>
                                                                <!--end::timeline icon-->
                                                                <!--begin::timeline content-->
                                                                <div class="timeline-content mt-n1">
                                                                    <!--begin::timeline heading-->
                                                                    <div class="d-flex justify-content-between pe-3 mb-5">
                                                                        <!--begin::Title-->
                                                                        <div class="fs-5 fw-semibold mb-2 my-title">لیست دوره ها</div>
                                                                        <!--end::Title-->
                                                                        <!--begin::توضیحات-->
                                                                        <div class="d-flex align-items-center mt-1 fs-6">
                                                                            <!--begin::Info-->
                                                                            <!-- <div class="text-muted me-2 fs-7">اضافه شده در ساعت 4:12</div> -->
                                                                            <!--end::Info-->
                                                                            <!--begin::user-->
                                                                            <!-- <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                                                <img src="assets/media/avatars/300-14.jpg" alt="img" />
                                                                            </div> -->
                                                                            <!--end::user-->
                                                                        </div>
                                                                        <!--end::توضیحات-->


                                                                        <div class="pe-3 mb-5">
                                                                            <div class="d-flex align-items-center position-relative my-1">
                                                                                <a href="#">
                                                                                    <!-- <button type="submit" class="btn btn-sm fw-bold btn-primary" style="padding-left: 30px;padding-right: 30px">افزودن حرفه ها</button> -->
                                                                                    <a href="#" class="btn btn-primary er fs-6 px-8 py-4" data-bs-toggle="modal" data-bs-target="#kt_modal_new_product">افزودن دوره</a>
                                                                                </a>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <!--end::timeline heading-->
                                                                    <!--begin::timeline details-->
                                                                    <div class="overflow-auto pb-5">

                                                                        <!--begin::Table-->
                                                                        <table class="table align-middle table-row-dashed fs-6 gy-5" id="groups-table">
                                                                            <thead>
                                                                            <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">

                                                                                <th class="min-w-100px" style="text-align: right">شناسه</th>
                                                                                <th class="min-w-175px" style="text-align: right">نام دوره</th>
                                                                                <th class="min-w-175px" style="text-align: right">عملیات</th>

                                                                            </tr>
                                                                            </thead>
                                                                            <tbody class="fw-semibold text-gray-600" id="jobsList">

                                                                                <tr>
                                                                                    <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                    <td data-kt-ecommerce-order-filter="order_id"></td>
                                                                                    <td data-kt-ecommerce-order-filter="order_id">
                                                                                        <div class="d-flex flex-shrink-0">
                                                                                            <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 delete-item-product" productID="">
                                                                                                <i class="ki-duotone ki-switch fs-2">
                                                                                                    <span class="path1"></span>
                                                                                                    <span class="path2"></span>
                                                                                                </i>
                                                                                            </a>
                                                                                            <a class="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1 edit-item-product" data-bs-toggle="modal" data-bs-target="#kt_modal_edit_product" product-id="">
                                                                                                <i class="ki-duotone ki-pencil fs-2">
                                                                                                    <span class="path1"></span>
                                                                                                    <span class="path2"></span>
                                                                                                </i>
                                                                                            </a>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>

                                                                            </tbody>
                                                                        </table>
                                                                        <!--end::Table-->


                                                                    </div>
                                                                    <!--end::timeline details-->
                                                                </div>
                                                                <!--end::timeline content-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                        <!--end:::Tab pane-->
                                    </div>
                                    <!--end:::Tab content-->


                                </div>
                                <!--end::کارت body-->

                            </div>

                            
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>

</main>




</template>


<script>
   
</script>