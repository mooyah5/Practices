<template>
  <div class="res-rental-info-content">
    <div class="container mt-100 xs-mt-20">
      <div v-if="alert" class="rounded bg-light-gray pd-30 mb-50 xs-mb-30">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-4 xs-mb-20">
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="mr-2"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="#FFD500"
                    fill-rule="nonzero"
                    d="M2.964 23h18.072c1.848 0 3-2.041 2.076-3.667l-9.036-15.9a2.377 2.377 0 0 0-4.152 0l-9.036 15.9C-.036 20.96 1.116 23 2.964 23z"
                  />
                  <path fill="#2D2D31" d="M11 16V9h2v7zM13 20h-2v-2h2.004z" />
                </g>
              </svg>
              유의하세요!
            </h2>
          </div>
          <div class="col-lg-9 col-md-8 col-sm-8">
            <h6 class="mb-3">{{ alert.name }}</h6>
            <p class="f-13" style="line-height: 2.25">
              {{ alert.description }}
            </p>
            <div class="mt-3">
              <a
                :href="`https://www.hertz.co.kr/rentacar/reservation/reviewmodifycancel/templates/rentalTerms.jsp?KEYWORD=&EOAG=${pickupOffice.hertz_office.oag_code}`"
                target="_blank"
                class="active f-14"
                >픽업 영업소의 허츠 규정 확인</a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- //차량 등급 없는 경우 -->
      <div v-if="isLoading" class="xs-gutter pt-85 xs-pt-0">
        <div class="text-center">
          <h2 class="mb-20 color-blue-gray">
            예약 가능한 차량을 조회중 입니다.
          </h2>
        </div>
      </div>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <div class="res-rental-info-body">
        <div
          v-if="init && hertzCars.length > 0"
          class="pb-40 pl-20 pr-20 mb-40 xs-mb-20 xs-pb-20 bordered"
        >
          <h2 class="mb-10">추가보험 포함 차량 등급</h2>
          <label class="color-dark-gray f-14"
            >총
            {{
              (hertzCars.length ? hertzCars.length : 0) +
              (hertzExtraPostpaidCars.length
                ? hertzExtraPostpaidCars.length
                : 0)
            }}개 차량 등급 예약 가능</label
          >
        </div>
        <!-- 검색 목록 -->
        <div v-if="init && hertzCars.length > 0" class="container">
          <div class="res-rental-list">
            <div v-for="car in hertzCars" class="res-rental-item">
              <div
                class="image"
                :style="{
                  'background-image': `url(/images/fleets/${car.postpaid.fleet.image})`,
                }"
              ></div>
              <div class="info">
                <h4 class="title">
                  그룹 {{ car.postpaid.fleet.hertz_car_group }} -
                  {{ getSize(car.postpaid.fleet.sipp.substr(0, 1)) }}
                  {{ getCategory(car.postpaid.fleet.sipp.substr(1, 1)) }}
                </h4>
                <div class="sub-title">
                  {{
                    car.postpaid.carInfo && car.postpaid.carInfo.similarModel
                      ? car.postpaid.carInfo.similarModel
                      : car.postpaid.fleet.short_description
                  }}
                  또는 동급차량
                </div>
                <p class="f-13 color-dark-gray">
                  <span
                    v-if="
                      car.postpaid.fleet.sipp.substr(-1, 1) == 'E' ||
                      car.postpaid.fleet.sipp.substr(-1, 1) == 'C'
                    "
                    class="active fw-500"
                    >전기 자동차 </span
                  ><br
                    v-if="
                      car.postpaid.fleet.sipp.substr(-1, 1) == 'E' ||
                      car.postpaid.fleet.sipp.substr(-1, 1) == 'C'
                    "
                  />
                  <span class="active fw-500">{{
                    car.postpaid.fleet.transmission
                  }}</span
                  ><br />
                  {{
                    car.postpaid.carInfo &&
                    car.postpaid.carInfo.recommended_passengers
                      ? car.postpaid.carInfo.recommended_passengers
                      : car.postpaid.VehAvailCore.Vehicle._attributes
                          .PassengerQuantity
                      ? car.postpaid.VehAvailCore.Vehicle._attributes
                          .PassengerQuantity
                      : car.postpaid.fleet.num_passengers
                  }}
                  인승<br /><br />
                </p>
                <div class="f-13 color-dark-gray with-commas">
                  <span v-if="car.postpaid.fleet.num_large_suitcase"
                    >{{ car.postpaid.fleet.num_large_suitcase }} 대형
                    트렁크</span
                  >
                  <span v-if="car.postpaid.fleet.num_medium_suitcase"
                    >{{ car.postpaid.fleet.num_medium_suitcase }} 중형
                    트렁크</span
                  >
                  <span v-if="car.postpaid.fleet.num_small_suitcase"
                    >{{ car.postpaid.fleet.num_small_suitcase }} 소형
                    트렁크</span
                  >
                </div>
              </div>

              <!-- 쓰리프티 결제 -->
              <div
                v-if="car.thrifty && car.thrifty.VehAvailCore"
                class="selection"
              >
                <div class="mb-20 xs-mb-0">
                  <strong class="f-14">쓰리프티 픽업시 결제</strong>
                </div>
                <div class="price-outer">
                  <div class="price">
                    <span class="num">{{
                      car.thrifty.VehAvailCore.TotalCharge._attributes.EstimatedTotalAmount.toLocaleString()
                    }}</span>
                    {{ country.currency }}
                  </div>
                  <div class="mb-25 xs-mb-0">
                    <div
                      v-if="country.currency_item"
                      class="f-12 color-dark-gray sm-bottom"
                    >
                      약
                      {{
                        (
                          car.thrifty.VehAvailCore.TotalCharge._attributes
                            .EstimatedTotalAmount *
                          (country.currency_item.price
                            ? country.currency_item.price
                            : 1)
                        ).toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                        })
                      }}원
                    </div>
                    <div class="f-12 color-dark-gray">10% 할인 적용됨</div>
                  </div>
                </div>

                <form
                  :id="`thrifty_${car.thrifty.fleet.sipp}`"
                  method="GET"
                  action="/rentalCar/extra"
                >
                  <input
                    type="hidden"
                    name="ri"
                    :value="generate(car.thrifty.fleet.sipp)"
                  />
                  <input type="hidden" name="pt" value="thrifty" />
                  <input
                    type="hidden"
                    name="sipp"
                    :value="car.thrifty.fleet.sipp"
                  />
                  <input
                    type="hidden"
                    name="pickup_office_id"
                    :value="pickupOffice.id"
                  />
                  <input
                    type="hidden"
                    name="return_office_id"
                    :value="returnOffice.id"
                  />
                  <input
                    type="hidden"
                    name="pickup_datetime"
                    :value="pickupDatetime"
                  />
                  <input
                    type="hidden"
                    name="return_datetime"
                    :value="returnDatetime"
                  />
                  <input type="hidden" name="age" :value="age" />
                  <input type="hidden" name="country_id" :value="country.iso" />
                  <input
                    type="hidden"
                    name="currency"
                    :value="country.currency"
                  />
                  <button
                    id="thrifty_btn"
                    type="submit"
                    class="block btn btn-sm btn-default"
                  >
                    선택
                  </button>
                </form>
              </div>
              <!-- //쓰리프티 결제 -->
              <!-- 달러 결제 -->
              <div
                v-if="car.dollar && car.dollar.VehAvailCore"
                class="selection"
              >
                <div class="mb-20 xs-mb-0">
                  <strong class="f-14">달러 픽업시 결제</strong>
                </div>
                <div class="price-outer">
                  <div class="price">
                    <span class="num">{{
                      car.dollar.VehAvailCore.TotalCharge._attributes.EstimatedTotalAmount.toLocaleString()
                    }}</span>
                    {{ country.currency }}
                  </div>
                  <div class="mb-25 xs-mb-0">
                    <div
                      v-if="country.currency_item"
                      class="f-12 color-dark-gray sm-bottom"
                    >
                      약
                      {{
                        (
                          car.dollar.VehAvailCore.TotalCharge._attributes
                            .EstimatedTotalAmount *
                          (country.currency_item.price
                            ? country.currency_item.price
                            : 1)
                        ).toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                        })
                      }}원
                    </div>
                    <div class="f-12 color-dark-gray">10% 할인 적용됨</div>
                  </div>
                </div>

                <form
                  :id="`dollar_${car.dollar.fleet.sipp}`"
                  method="GET"
                  action="/rentalCar/extra"
                >
                  <input
                    type="hidden"
                    name="ri"
                    :value="generate(car.dollar.fleet.sipp)"
                  />
                  <input type="hidden" name="pt" value="dollar" />
                  <input
                    type="hidden"
                    name="sipp"
                    :value="car.dollar.fleet.sipp"
                  />
                  <input
                    type="hidden"
                    name="pickup_office_id"
                    :value="pickupOffice.id"
                  />
                  <input
                    type="hidden"
                    name="return_office_id"
                    :value="returnOffice.id"
                  />
                  <input
                    type="hidden"
                    name="pickup_datetime"
                    :value="pickupDatetime"
                  />
                  <input
                    type="hidden"
                    name="return_datetime"
                    :value="returnDatetime"
                  />
                  <input type="hidden" name="age" :value="age" />
                  <input type="hidden" name="country_id" :value="country.iso" />
                  <input
                    type="hidden"
                    name="currency"
                    :value="country.currency"
                  />
                  <button
                    id="dollar_btn"
                    type="submit"
                    class="block btn btn-sm btn-default"
                  >
                    선택
                  </button>
                </form>
              </div>
              <!-- //달러 결제 -->
              <LoadingSpinner v-if="isPrepaidLoading"></LoadingSpinner>
              <!-- 선불 결제 -->
              <div
                v-if="car.prepaid && car.prepaid.VehAvailCore"
                class="selection"
              >
                <div class="mb-20 xs-mb-0">
                  <strong class="f-14">선불 결제</strong>
                </div>
                <div class="price-outer">
                  <div class="price">
                    <span class="num">{{
                      car.prepaid.VehAvailCore.TotalCharge._attributes.EstimatedTotalAmount.toLocaleString()
                    }}</span>
                    {{ country.currency }}
                  </div>
                  <div class="mb-25 xs-mb-0">
                    <div
                      v-if="country.currency_item"
                      class="f-12 color-dark-gray sm-bottom"
                    >
                      약
                      {{
                        (
                          car.prepaid.VehAvailCore.TotalCharge._attributes
                            .EstimatedTotalAmount *
                          (country.currency_item.price
                            ? country.currency_item.price
                            : 1)
                        ).toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                        })
                      }}원
                    </div>
                    <div class="f-12 color-dark-gray">최대 할인 적용됨</div>
                  </div>
                </div>
                <form
                  :id="`prepaid_${car.prepaid.fleet.sipp}`"
                  method="GET"
                  action="/rentalCar/extra"
                >
                  <input
                    type="hidden"
                    name="ri"
                    :value="generate(car.prepaid.fleet.sipp)"
                  />
                  <input type="hidden" name="pt" value="prepaid" />
                  <!-- <input type="hidden" name="car_prepaid_price" value="{{ $car["carPrepaidPrice"]->id }}">
                                      @if($car["car"] && $car["car"]->priority !== 9999)
                                          <input type="hidden" name="car_id" value="{{ $car["car"]["id"] }}">
                                      @endif -->
                  <input
                    type="hidden"
                    name="sipp"
                    :value="car.prepaid.fleet.sipp"
                  />
                  <input
                    type="hidden"
                    name="pickup_office_id"
                    :value="pickupOffice.id"
                  />
                  <input
                    type="hidden"
                    name="return_office_id"
                    :value="returnOffice.id"
                  />
                  <input
                    type="hidden"
                    name="pickup_datetime"
                    :value="pickupDatetime"
                  />
                  <input
                    type="hidden"
                    name="return_datetime"
                    :value="returnDatetime"
                  />
                  <input type="hidden" name="age" :value="age" />
                  <input type="hidden" name="country_id" :value="country.iso" />
                  <input
                    type="hidden"
                    name="currency"
                    :value="country.currency"
                  />
                  <button
                    type="button"
                    class="block btn btn-sm btn-primary"
                    data-toggle="modal"
                    data-target="#agreeModal"
                    @click="
                      $parent.agreeData.payment_type = 'prepaid';
                      $parent.agreeData.car_id = car.prepaid.fleet.sipp;
                    "
                  >
                    선택
                  </button>
                  <!-- v-bind:class="{ 'loading': busy && busyId === car.prepaid.fleet.sipp }" -->
                </form>
              </div>
              <!-- //선불 결제 -->
              <!-- 픽업 시 결제 -->
              <div v-if="car.postpaid.VehAvailCore" class="selection">
                <div class="mb-20 xs-mb-0">
                  <strong class="f-14">픽업 시 결제</strong>
                </div>
                <div class="price-outer">
                  <div class="price">
                    <span class="num">{{
                      car.postpaid.VehAvailCore.TotalCharge._attributes.EstimatedTotalAmount.toLocaleString()
                    }}</span>
                    {{ country.currency }}
                  </div>
                  <div class="mb-25 xs-mb-0">
                    <div
                      v-if="country.currency_item"
                      class="f-12 color-dark-gray sm-bottom"
                    >
                      약
                      {{
                        (
                          car.postpaid.VehAvailCore.TotalCharge._attributes
                            .EstimatedTotalAmount *
                          (country.currency_item.price
                            ? country.currency_item.price
                            : 1)
                        ).toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                        })
                      }}원
                    </div>
                    <div class="f-12 color-dark-gray">10% 할인 적용됨</div>
                  </div>
                </div>

                <form
                  :id="`postpaid_${car.postpaid.fleet.sipp}`"
                  method="GET"
                  action="/rentalCar/extra"
                >
                  <input
                    type="hidden"
                    name="ri"
                    :value="generate(car.postpaid.fleet.sipp)"
                  />
                  <input
                    type="hidden"
                    name="sipp"
                    :value="car.postpaid.fleet.sipp"
                  />
                  <input type="hidden" name="pt" value="postpaid" />
                  <input
                    type="hidden"
                    name="pickup_office_id"
                    :value="pickupOffice.id"
                  />
                  <input
                    type="hidden"
                    name="return_office_id"
                    :value="returnOffice.id"
                  />
                  <input
                    type="hidden"
                    name="pickup_datetime"
                    :value="pickupDatetime"
                  />
                  <input
                    type="hidden"
                    name="return_datetime"
                    :value="returnDatetime"
                  />
                  <input type="hidden" name="age" :value="age" />
                  <input type="hidden" name="country_id" :value="country.iso" />
                  <input
                    type="hidden"
                    name="currency"
                    :value="country.currency"
                  />
                  <button
                    id="postpaid_btn"
                    type="submit"
                    class="block btn btn-sm btn-default"
                  >
                    선택
                  </button>
                </form>
              </div>
              <!-- //픽업 시 결제 -->
            </div>
          </div>
        </div>
        <!-- //검색 목록 -->

        <div
          v-if="init && hertzExtraPostpaidCars.length > 0"
          class="pb-40 pl-20 pr-20 mb-40 xs-mb-20 xs-pb-20 bordered"
        >
          <h2 class="mb-10">추가보험 불포함 차량 등급</h2>
          <label class="color-dark-gray f-14"
            >총 {{ hertzExtraPostpaidCars.length }}개 차량 등급 예약 가능</label
          >
        </div>
        <!-- 검색 목록 -->
        <div v-if="init && hertzExtraPostpaidCars.length > 0" class="container">
          <div class="res-rental-list">
            <div v-for="car in hertzExtraPostpaidCars" class="res-rental-item">
              <div
                class="image"
                :style="{
                  'background-image': `url(/images/fleets/${car.fleet.image})`,
                }"
              ></div>
              <div class="info">
                <h4 class="title">
                  그룹 {{ car.fleet.hertz_car_group }} -
                  {{ getSize(car.fleet.sipp.substr(0, 1)) }}
                  {{ getCategory(car.fleet.sipp.substr(1, 1)) }}
                </h4>
                <div class="sub-title">
                  {{
                    car.carInfo && car.carInfo.similarModel
                      ? car.carInfo.similarModel
                      : car.fleet.short_description
                  }}
                  또는 동급차량
                </div>
                <p class="f-13 color-dark-gray">
                  <span
                    v-if="
                      car.fleet.sipp.substr(-1, 1) == 'E' ||
                      car.fleet.sipp.substr(-1, 1) == 'C'
                    "
                    class="active fw-500"
                    >전기 자동차 </span
                  ><br
                    v-if="
                      car.fleet.sipp.substr(-1, 1) == 'E' ||
                      car.fleet.sipp.substr(-1, 1) == 'C'
                    "
                  />
                  <span class="active fw-500">{{ car.fleet.transmission }}</span
                  ><br />
                  {{
                    car.carInfo && car.carInfo.recommended_passengers
                      ? car.carInfo.recommended_passengers
                      : car.VehAvailCore.Vehicle._attributes.PassengerQuantity
                      ? car.VehAvailCore.Vehicle._attributes.PassengerQuantity
                      : car.fleet.num_passengers
                  }}
                  인승<br /><br />
                </p>
                <div class="f-13 color-dark-gray with-commas">
                  <span v-if="car.fleet.num_large_suitcase"
                    >{{ car.fleet.num_large_suitcase }} 대형 트렁크</span
                  >
                  <span v-if="car.fleet.num_medium_suitcase"
                    >{{ car.fleet.num_medium_suitcase }} 중형 트렁크</span
                  >
                  <span v-if="car.fleet.num_small_suitcase"
                    >{{ car.fleet.num_small_suitcase }} 소형 트렁크</span
                  >
                </div>
              </div>
              <!-- 선불 결제 -->
              <!-- @if(isset($car["carPrepaidPrice"]) && $car["carPrepaidPrice"] && $country->currencyItem)
                              <div class="selection">
                                  <div class="mb-20 xs-mb-0">
                                      <strong class="f-14">선불 결제</strong>
                                  </div>
                                  <div class="price-outer">
                                      <div class="price">
                                          <span class="num">{{ number_format($car["carPrepaidPrice"]->price, 2) }}</span> {{ $country->currency }}
                                      </div>
                                      <div class="mb-25 xs-mb-0">
                                          <div class="f-12 color-dark-gray sm-bottom">약 {{ number_format((int)$car["carPrepaidPrice"]->price * (int)$country->currencyItem->price) }}원</div>
                                          <div class="f-12 color-dark-gray">최대 할인 적용됨</div>
                                      </div>
                                  </div>
                                      <form id="prepaid_{{ $car["id"] }}" method="GET" action="{{ route('rentalCar.extra') }}">

                                          <input type="hidden" name="ri" value="{{ $car["reservationId"] }}">
                                          <input type="hidden" name="pt" value="prepaid">
                                          <input type="hidden" name="car_prepaid_price" value="{{ $car["carPrepaidPrice"]->id }}">
                                          @if($car["car"] && $car["car"]->priority !== 9999)
                                              <input type="hidden" name="car_id" value="{{ $car["car"]["id"] }}">
                                          @endif
                                          <input type="hidden" name="sipp" value="{{$car["fleet"]->sipp ?? ''}}">
                                          <input type="hidden" name="pickup_office_id" value="{{ $pickupOffice->id }}">
                                          <input type="hidden" name="return_office_id" value="{{ $returnOffice->id }}">
                                          <input type="hidden" name="pickup_datetime" value="{{ $pickupDatetime }}">
                                          <input type="hidden" name="return_datetime" value="{{ $returnDatetime }}">
                                          <input type="hidden" name="age" value="{{ $age }}">
                                          <input type="hidden" name="country_id" value="{{ $country->iso }}">
                                          <input type="hidden" name="currency" value="{{ $country->currency }}">
                                          <button type="button" class="block btn btn-sm btn-primary" data-toggle="modal" data-target="#agreeModal" 
                                          @click=" 
                                              agreeData.payment_type = 'prepaid';
                                              agreeData.car_id = {{ $car["id"] }}"
                                          v-bind:class="{ 'loading': busy && busyId === {{ $car["id"] }} }">선택</button>
                                      </form>
                              </div>
                          @endif -->
              <!-- //선불 결제 -->
              <!-- 픽업 시 결제 -->
              <div v-if="car.VehAvailCore" class="selection">
                <div class="mb-20 xs-mb-0">
                  <strong class="f-14">픽업 시 결제</strong>
                </div>
                <div class="price-outer">
                  <div class="price">
                    <span class="num">{{
                      car.VehAvailCore.TotalCharge._attributes.EstimatedTotalAmount.toLocaleString()
                    }}</span>
                    {{ country.currency }}
                  </div>
                  <div class="mb-25 xs-mb-0">
                    <div
                      v-if="country.currency_item"
                      class="f-12 color-dark-gray sm-bottom"
                    >
                      약
                      {{
                        (
                          car.VehAvailCore.TotalCharge._attributes
                            .EstimatedTotalAmount *
                          (country.currency_item.price
                            ? country.currency_item.price
                            : 1)
                        ).toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                        })
                      }}원
                    </div>
                    <div class="f-12 color-dark-gray">10% 할인 적용됨</div>
                  </div>
                </div>

                <form
                  :id="`postpaid_${car.fleet.sipp}`"
                  method="GET"
                  action="/rentalCar/extra"
                >
                  <input type="hidden" name="pt" value="postpaid" />
                  <input type="hidden" name="sipp" :value="car.fleet.sipp" />
                  <input
                    type="hidden"
                    name="pickup_office_id"
                    :value="pickupOffice.id"
                  />
                  <input
                    type="hidden"
                    name="return_office_id"
                    :value="returnOffice.id"
                  />
                  <input
                    type="hidden"
                    name="pickup_datetime"
                    :value="pickupDatetime"
                  />
                  <input
                    type="hidden"
                    name="return_datetime"
                    :value="returnDatetime"
                  />
                  <input type="hidden" name="age" :value="age" />
                  <input type="hidden" name="country_id" :value="country.iso" />
                  <input
                    type="hidden"
                    name="currency"
                    :value="country.currency"
                  />
                  <input type="hidden" name="no_rq" value="1" />
                  <button
                    id="postpaid_btn"
                    type="submit"
                    class="block btn btn-sm btn-default"
                  >
                    선택
                  </button>
                </form>
              </div>
              <!-- //픽업 시 결제 -->
            </div>
          </div>
        </div>
        <!-- //검색 목록 -->
      </div>
    </div>
    <!-- 차량 등급 없는 경우 -->
    <div
      v-if="init && hertzCars.length < 1 && hertzExtraPostpaidCars.length < 1"
      class="container mt-100 xs-mt-20"
    >
      <div class="xs-gutter pt-85 xs-pt-0">
        <div class="text-center">
          <div class="mb-45">
            <img
              src="/images/img-error@2x.png"
              alt="Error Image"
              style="width: 268px; height: 168px"
            />
          </div>
          <h2 class="mb-20 color-blue-gray">
            예약이 불가능한 일정이거나 <br />
            조회된 차량이 하나도 없습니다
          </h2>
          <p class="color-blue-gray f-14 mb-45 xs-sm-45">
            다른 일정을 한번 시도해 보세요
          </p>
          <a href="javascript:history.back()" class="btn btn-medium btn-primary"
            >이전 페이지로</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import LoadingSpinner from "../common/LoadingSpinner.vue";
import define from "../../store/modules/define.js";

export default {
  name: "RentalCarList",
  props: [
    "type",
    "pickupOffice",
    "returnOffice",
    "pickupDatetime",
    "returnDatetime",
    "insurance",
    "age",
    "country",
    "cars",
    "fleets",
    "carInfos",
    "currencies",
    "apikey",
    "apiUrl",
    "alert",
  ],
  data() {
    return {
      open: null,
      hertzCars: [],
      hertzExtraPostpaidCars: [],
      init: false,
      isLoading: false,
      isPrepaidLoading: false,
      warn: null,
    };
  },
  computed: {
    ...mapState({
      view: (state) => state.carReservation.view,
    }),
  },
  // components: {
  //   LoadingSpinner,
  // },
  methods: {
    async getCar() {
      this.isLoading = true;

      await this.getHertzPostPaid(false);
      this.isLoading = false;
      if (this.hertzCars.length > 0) {
        this.getHertzPrePaid();
        this.getDollar();
        this.getThrifty();
      }
      this.getHertzPostPaid(true);
    },
    getSize(size) {
      const sizeData = define.define.getSizeDefine();
      return sizeData.find((el) => el.code === size)
        ? sizeData.find((el) => el.code === size).name
        : "";
    },
    getCategory(category) {
      const categoryData = define.define.getCategoryDefine();
      return categoryData.find((el) => el.code === category)
        ? categoryData.find((el) => el.code === category).name_en
        : "";
    },
    setCurrency(VehAvailCore) {
      if (
        (!this.country.currencyItem ||
          this.country.currencyItem == undefined) &&
        (VehAvailCore ? VehAvailCore : null)
      ) {
        this.country.currency = VehAvailCore.TotalCharge._attributes
          .CurrencyCode
          ? VehAvailCore.TotalCharge._attributes.CurrencyCode
          : "";
        this.country.currencyItem = this.currencies.find(
          (el) => el.code === this.country.currency
        );
      }
    },
    generate(sipp) {
      const token = sipp + "_" + Math.random().toString(36).slice(2);
      return token;
    },
    async getHertzPostPaid(extra) {
      let insurance = null;
      if (extra == false) {
        insurance = this.insurance.find((el) => el.type === "postpaid");
        this.hertzCars = [];
      } else {
        this.hertzExtraPostpaidCars = [];
      }

      await axios
        .get(
          `${this.apiUrl}car/search/hertz/postpaid/${extra}/${
            this.pickupDatetime
          }
              /${this.returnDatetime}
              /${this.pickupOffice.hertz_office.oag_code}
              /${this.returnOffice.hertz_office.oag_code}
              /${this.age}
              ?countryId=${this.country.iso}
              &rqCode=${insurance ? insurance.rq : ""}`,
          {
            headers: {
              apikey: this.apikey,
            },
          }
        )
        .then((res) => {
          if (res.data) {
            const data =
              res.data.OTA_VehAvailRateRS.VehAvailRSCore.VehVendorAvails
                .VehVendorAvail.VehAvails.VehAvail;
            if (res.data.OTA_VehAvailRateRS.Warnings) {
              for (
                let i = 0;
                i < res.data.OTA_VehAvailRateRS.Warnings.Warning.length;
                i++
              ) {
                if (
                  res.data.OTA_VehAvailRateRS.Warnings.Warning[i]._attributes
                    .ShortText ==
                  "CAR RETURN AT MUNICIPAL GARAGE WITH EXTRA FEE OF EUR 49.50"
                ) {
                  this.warn = 1;
                  break;
                }
                if (
                  res.data.OTA_VehAvailRateRS.Warnings.Warning[i]._attributes
                    .RecordID == "830"
                ) {
                  this.warn = 2;
                  break;
                }
              }
            }
            if (extra == false) {
              this.setCurrency(data[0].VehAvailCore);
            }
            for (let i = 0; i < data.length; i++) {
              if (
                extra &&
                this.hertzCars.find(
                  (el) =>
                    el.postpaid.VehAvailCore.Vehicle._attributes.Code ==
                    data[i].VehAvailCore.Vehicle._attributes.Code
                )
              ) {
                continue;
              }
              const sipp = data[i].VehAvailCore.Vehicle._attributes.Code;
              if (
                (sipp.substr(-1, 1) == "E" || sipp.substr(-1, 1) == "C") &&
                this.pickupOffice.id != this.returnOffice.id
              ) {
                continue;
              }
              const fleet = this.fleets.find((el) => el.sipp === sipp);
              const carInfo = this.carInfos.find(
                (el) => el.fleet.sipp === sipp
              );
              if (fleet) {
                if (extra == false) {
                  this.hertzCars.push({
                    postpaid: { ...data[i], fleet: fleet, carInfo: carInfo },
                    prepaid: null,
                    dollar: null,
                    thrifty: null,
                  });
                } else {
                  this.hertzExtraPostpaidCars.push({
                    ...data[i],
                    fleet: fleet,
                    carInfo: carInfo,
                  });
                }
              }
            }
          } else {
            if (extra == false) {
              this.hertzCars = [];
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },

    async getHertzPrePaid() {
      if (this.country.pre_api == 1) {
        this.isPrepaidLoading = true;
        const insurance = this.insurance.find((el) => el.type === "prepaid");
        if (!insurance) return;
        axios
          .get(
            `${this.apiUrl}car/search/hertz/prepaid/false/${this.pickupDatetime}
                  /${this.returnDatetime}
                  /${this.pickupOffice.hertz_office.oag_code}
                  /${this.returnOffice.hertz_office.oag_code}
                  /${this.age}
                  ?countryId=${this.country.iso}
                  &rqCode=${insurance.rq}
                  &tnum=${insurance.tnum}`,
            {
              headers: {
                apikey: this.apikey,
              },
            }
          )
          .then((res) => {
            if (res.data && res.data.OTA_VehAvailRateRS.VehAvailRSCore) {
              const data =
                res.data.OTA_VehAvailRateRS.VehAvailRSCore.VehVendorAvails
                  .VehVendorAvail.VehAvails.VehAvail;
              this.setCurrency(data[0].VehAvailCore);
              for (let i = 0; i < data.length; i++) {
                const sipp = data[i].VehAvailCore.Vehicle._attributes.Code;
                if (
                  (sipp.substr(-1, 1) == "E" || sipp.substr(-1, 1) == "C") &&
                  this.pickupOffice.id != this.returnOffice.id
                ) {
                  continue;
                }
                const fleet = this.fleets.find((el) => el.sipp === sipp);
                const carInfo = this.carInfos.find(
                  (el) => el.fleet.sipp === sipp
                );
                const hertzCar = this.hertzCars.find(
                  (el) => el.postpaid.fleet.sipp === sipp
                );
                if (fleet && hertzCar) {
                  hertzCar.prepaid = {
                    ...data[i],
                    fleet: fleet,
                    carInfo: carInfo,
                  };
                }
              }
            }
          })
          .catch((e) => {
            this.isPrepaidLoading = false;
            console.log(e);
          });
      }
      this.isPrepaidLoading = false;
    },
    async getDollar() {
      if (this.country.dollar_api == 1) {
        const insurance = this.insurance.find((el) => el.type === "dollar");
        if (!insurance) return;
        axios
          .get(
            `${this.apiUrl}car/search/dollar/postpaid/false/${
              this.pickupDatetime
            }
                  /${this.returnDatetime}
                  /${this.pickupOffice.hertz_office.oag_code}
                  /${this.returnOffice.hertz_office.oag_code}
                  /${this.age}
                  ?countryId=${this.country.iso}
                  ${
                    insurance.rq && insurance.rq != "empty"
                      ? "&rqCode=" + insurance.rq
                      : ""
                  }
                  &cdp=${insurance.cdp}`,
            {
              headers: {
                apikey: this.apikey,
              },
            }
          )
          .then((res) => {
            if (res.data && res.data.OTA_VehAvailRateRS.VehAvailRSCore) {
              const data =
                res.data.OTA_VehAvailRateRS.VehAvailRSCore.VehVendorAvails
                  .VehVendorAvail.VehAvails.VehAvail;
              this.setCurrency(data[0].VehAvailCore);
              for (let i = 0; i < data.length; i++) {
                const sipp = data[i].VehAvailCore.Vehicle._attributes.Code;
                if (
                  (sipp.substr(-1, 1) == "E" || sipp.substr(-1, 1) == "C") &&
                  this.pickupOffice.id != this.returnOffice.id
                ) {
                  continue;
                }
                const fleet = this.fleets.find((el) => el.sipp === sipp);
                const carInfo = this.carInfos.find(
                  (el) => el.fleet.sipp === sipp
                );
                const hertzCar = this.hertzCars.find(
                  (el) => el.postpaid.fleet.sipp === sipp
                );
                if (fleet && hertzCar) {
                  hertzCar.dollar = {
                    ...data[i],
                    fleet: fleet,
                    carInfo: carInfo,
                  };
                }
              }
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    async getThrifty() {
      if (this.country.thrifty_api == 1) {
        const insurance = this.insurance.find((el) => el.type === "thrifty");
        if (!insurance) return;
        axios
          .get(
            `${this.apiUrl}car/search/thrifty/postpaid/false/${
              this.pickupDatetime
            }
                  /${this.returnDatetime}
                  /${this.pickupOffice.hertz_office.oag_code}
                  /${this.returnOffice.hertz_office.oag_code}
                  /${this.age}
                  ?countryId=${this.country.iso}
                  ${
                    insurance.rq && insurance.rq != "empty"
                      ? "&rqCode=" + insurance.rq
                      : ""
                  }
                  &cdp=${insurance.cdp}`,
            {
              headers: {
                apikey: this.apikey,
              },
            }
          )
          .then((res) => {
            if (res.data && res.data.OTA_VehAvailRateRS.VehAvailRSCore) {
              const data =
                res.data.OTA_VehAvailRateRS.VehAvailRSCore.VehVendorAvails
                  .VehVendorAvail.VehAvails.VehAvail;
              this.setCurrency(data[0].VehAvailCore);
              for (let i = 0; i < data.length; i++) {
                const sipp = data[i].VehAvailCore.Vehicle._attributes.Code;
                if (
                  (sipp.substr(-1, 1) == "E" || sipp.substr(-1, 1) == "C") &&
                  this.pickupOffice.id != this.returnOffice.id
                ) {
                  continue;
                }
                const fleet = this.fleets.find((el) => el.sipp === sipp);
                const carInfo = this.carInfos.find(
                  (el) => el.fleet.sipp === sipp
                );
                const hertzCar = this.hertzCars.find(
                  (el) => el.postpaid.fleet.sipp === sipp
                );
                if (fleet && hertzCar) {
                  hertzCar.thrifty = {
                    ...data[i],
                    fleet: fleet,
                    carInfo: carInfo,
                  };
                }
              }
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  async mounted() {
    const self = this;
    await this.getCar();
    this.init = true;

    if (this.warn == 1) {
      setTimeout(() => {
        $("#extra_message").html(
          "선택하신 반납영업소는 반납주차료 EUR 49.50 (세금포함 EUR 58.50)이 별도 청구됩니다."
        );
        $("#extraFeeModal").modal("show");
      }, 500);
    }
    if (this.warn == 2) {
      setTimeout(() => {
        $("#extra_message").html(
          "선택하신 반납영업소는 반납주차료가 별도 청구됩니다."
        );
        $("#extraFeeModal").modal("show");
      }, 500);
    }
  },
};
</script>
