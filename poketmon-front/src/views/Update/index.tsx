import React, { ChangeEvent, useEffect, useRef } from 'react'
import './style.css';
import { useNavigate, useParams } from 'react-router-dom';
import { usePoketSaveStore } from '../../stores';
import { GetPoketResponseDto, PatchPoketResponseDto, PostPoketResponseDto } from '../../interfaces/response';
import { MAIN_PATH } from '../../constants';
import { getPoketRequest, patchPoketRequest, postPoketRequest } from '../../apis';
import PostPoketRequestDto from '../../interfaces/request/post-poket.request.dto';
import { ResponseDto } from '../../interfaces';
import PatchPoketRequestDto from '../../interfaces/request/patch-poket.request.dto';

export default function Update() {

  // state : 요소 참조 상태 //
  const nameRef = useRef<HTMLInputElement | null>(null);
  const typeRef = useRef<HTMLInputElement | null>(null);
  const specificityRef = useRef<HTMLInputElement | null>(null);
  const charactersRef = useRef<HTMLInputElement | null>(null);
  const thingsRef = useRef<HTMLInputElement | null>(null);
  const individualHpRef = useRef<HTMLInputElement | null>(null);
  const individualAttackRef = useRef<HTMLInputElement | null>(null);
  const individualDefenceRef = useRef<HTMLInputElement | null>(null);
  const individualSpecialAttackRef = useRef<HTMLInputElement | null>(null);
  const individualSpecialDefenceRef = useRef<HTMLInputElement | null>(null);
  const individualSpeedRef = useRef<HTMLInputElement | null>(null);
  const effortHpRef = useRef<HTMLInputElement | null>(null);
  const effortAttackeRef = useRef<HTMLInputElement | null>(null);
  const effortDefenceRef = useRef<HTMLInputElement | null>(null);
  const effortSpecialAttackeRef = useRef<HTMLInputElement | null>(null);
  const effortSpecialDefenceRef = useRef<HTMLInputElement | null>(null);
  const effortSpeedRef = useRef<HTMLInputElement | null>(null);
  const technologyOneRef = useRef<HTMLInputElement | null>(null);
  const technologyTwoRef = useRef<HTMLInputElement | null>(null);
  const technologyThreeRef = useRef<HTMLInputElement | null>(null);
  const technologyFourRef = useRef<HTMLInputElement | null>(null);


  // state : 게시물 정보를 저장할 상태 //
  const { 
    name, type, specificity, characters, things,
    individualHp, individualAttack, individualDefence,
    individualSpecialAttack, individualSpecialDefence, individualSpeed,
    effortHp, effortAttack, effortDefence,
    effortSpecialAttack, effortSpecialDefence, effortSpeed,
    technologyOne, technologyTwo, technologyThree, technologyFour,
    setName, setType, setSpecificity, setCharacters, setThings,
    setIndividualHp, setIndividualAttack, setIndividualDefence,
    setIndividualSpecialAttack, setIndividualSpecialDefence, setIndividualSpeed,
    setEffortHp, setEffortAttack, setEffortDefence,
    setEffortSpecialAttack,  setEffortSpecialDefence, setEffortSpeed,
    setTechnologyOne, setTechnologyTwo, setTechnologyThree, setTechnologyFour,
    resetPoket
  } = usePoketSaveStore();

  // state : path variable //
  const { poketmonNumber } = useParams();

  //            function           //
  const navigator = useNavigate();

  // function : get poket response //
  const getPoketResponse = (responseBody: GetPoketResponseDto | ResponseDto | null) => {
    if(!responseBody) return;
    const { code } = responseBody;
    if(code === 'DE') alert('데이터베이스 오류입니다.');
    if(code !== 'SU') return;

    const { name, type, specificity, characters, things,
      individualHp, individualAttack, individualDefence,
      individualSpecialAttack, individualSpecialDefence, individualSpeed,
      effortHp, effortAttack, effortDefence,
      effortSpecialAttack, effortSpecialDefence, effortSpeed,
      technologyOne, technologyTwo, technologyThree, technologyFour } = responseBody as GetPoketResponseDto;
      setName(name);
      setType(type);
      setSpecificity(specificity);
      setCharacters(characters);
      setThings(things);
      setIndividualHp(individualHp);
      setIndividualAttack(individualAttack);
      setIndividualDefence(individualDefence);
      setIndividualSpecialAttack(individualSpecialAttack);
      setIndividualSpecialDefence(individualSpecialDefence);
      setIndividualSpeed(individualSpeed);
      setEffortHp(effortHp);
      setEffortAttack(effortAttack);
      setEffortDefence(effortDefence);
      setEffortSpecialAttack(effortSpecialAttack);
      setEffortSpecialDefence(effortSpecialDefence);
      setEffortSpeed(effortSpeed);
      setTechnologyOne(technologyOne);
      setTechnologyTwo(technologyTwo);
      setTechnologyThree(technologyThree);
      setTechnologyFour(technologyFour);
  }

  // function : patch poket response //
  const patchPoketResponse = (responseBody: PatchPoketResponseDto | ResponseDto | null) => {
    if(!responseBody) return;
    const { code } = responseBody;
    if(code === 'DE')alert('데이터베이스 오류입니다.');
    if(code !== 'SU') return;

    if(!poketmonNumber) return;
    navigator(MAIN_PATH());
  }
  
  // event handler : 수정버튼 클릭 이벤트 //
  const onUpdateButtonClickHandler = async () => {
    if(!poketmonNumber) return;
    const requestBody : PatchPoketRequestDto = {
      name, type, specificity, characters, things,
      individualHp, individualAttack, individualDefence,
      individualSpecialAttack, individualSpecialDefence, individualSpeed,
      effortHp, effortAttack, effortDefence,
      effortSpecialAttack, effortSpecialDefence, effortSpeed,
      technologyOne, technologyTwo, technologyThree, technologyFour
    }
    patchPoketRequest(poketmonNumber, requestBody).then(patchPoketResponse);
  }

// event handler : 이름 입력 이벤트 //
const onNameChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setName(value);
}
// event handler : 타입 입력 이벤트 //
const onTypeChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setType(value);
}
// event handler : 특성 입력 이벤트 //
const onSpecificityChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setSpecificity(value);
}
// event handler : 성격 입력 이벤트 //
const onCharactersChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setCharacters(value);
}
// event handler : 지닌물건 입력 이벤트 //
const onThingsChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setThings(value);
}
// event handler : 개체치 hp 입력 이벤트 //
const onIndividualHpChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setIndividualHp(value);
}
// event handler : 개체치 공격 입력 이벤트 //
const onIndividualAttackChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setIndividualAttack(value);
}
// event handler : 개체치 방어 입력 이벤트 //
const onIndividualDefenceChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setIndividualDefence(value);
}
// event handler : 개체치 특공 입력 이벤트 //
const onIndividualSpecialAttackChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setIndividualSpecialAttack(value);
}
// event handler : 개체치 특방 입력 이벤트 //
const onIndividualSpecialDefenceChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setIndividualSpecialDefence(value);
}
// event handler : 개체치 스피드 입력 이벤트 //
const onIndividualSpeedChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setIndividualSpeed(value);
}
// event handler : 노력치hp 입력 이벤트 //
const onEffortHpChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setEffortHp(value);
}
// event handler :노력치 공격 입력 이벤트 //
const onEffortAttackpChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setEffortAttack(value);
}
// event handler : 노력치 방어 입력 이벤트 //
const onEffortDefenceChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setEffortDefence(value);
}
// event handler :노력치 특공 입력 이벤트 //
const onEffortSpecialAttackChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setEffortSpecialAttack(value);
}  
// event handler : 노력치 특방 입력 이벤트 //
const onEffortSpecialDefenceChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setEffortSpecialDefence(value);
}
// event handler : 노력치 스피드 입력 이벤트 //
const onEffortSpeedChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
setEffortSpeed(value); 
}
// event handler : 기술1 입력 이벤트 //
const onTechnologyOneChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setTechnologyOne(value); 
}
// event handler : 기술2 입력 이벤트 //
const onTechnologyTwoChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setTechnologyTwo(value); 
}
// event handler : 기술3 입력 이벤트 //
const onTechnologyThreeChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setTechnologyThree(value); 
}
// event handler : 기술4 입력 이벤트 //
const onTechnologyFourChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setTechnologyFour(value); 
}
// event handler : 메인 이동 //
const onMainClickHandler = () => {
  navigator(MAIN_PATH());
}

// effect : 마운트시 실행할 함수 //
useEffect(() => {
  if(!poketmonNumber) return;
  getPoketRequest(poketmonNumber).then(getPoketResponse);
}, [poketmonNumber]);

//            render           //
  return (
    <div id='poket-sample-update'>
      <div className='poket-update-header'>
        <div className='poket-update-header-title' onClick={onMainClickHandler} >{'포켓몬 샘플 데이터'}</div>
      </div>
      <div className='poket-update-main'>
        <div className='poket-update-input-box'>
          <div className='poket-update-input-first'>
            <input ref={nameRef} className='poket-update-sample-name' placeholder='이름' onChange={onNameChangeHandler} value={name} ></input>
            <input ref={typeRef} className='poket-update-sample-type' placeholder='타입' onChange={onTypeChangeHandler} value={type}></input>
            <input ref={specificityRef} className='poket-update-sample-specificity' placeholder='특성' onChange={onSpecificityChangeHandler} value={specificity}></input>
            <input ref={charactersRef} className='poket-update-sample-character' placeholder='성격' onChange={onCharactersChangeHandler} value={characters} ></input>
            <input ref={thingsRef} className='poket-update-sample-thing' placeholder='지닌 물건' onChange={onThingsChangeHandler} value={things}></input>
          </div>
          <div className='poket-update-input-second'>
            <div className='poket-update-sample-value'>{'개체치'}</div>
            <input ref={individualHpRef} className='poket-update-sample-HP' placeholder='HP' onChange={onIndividualHpChangeHandler} value={individualHp} ></input>
            <input ref={individualAttackRef} className='poket-update-sample-attack' placeholder='공격' onChange={onIndividualAttackChangeHandler} value={individualAttack} ></input>
            <input ref={individualDefenceRef} className='poket-update-sample-defence' placeholder='방어' onChange={onIndividualDefenceChangeHandler} value={individualDefence}></input>
            <input ref={individualSpecialAttackRef} className='poket-update-sample-special-attack' placeholder='특수 공격' onChange={onIndividualSpecialAttackChangeHandler} value={individualSpecialAttack} ></input>
            <input ref={individualSpecialDefenceRef} className='poket-update-sample-special-defence' placeholder='특수 방어' onChange={onIndividualSpecialDefenceChangeHandler} value={individualSpecialDefence} ></input>
            <input ref={individualSpeedRef} className='poket-update-sample-speed' placeholder='스피드' onChange={onIndividualSpeedChangeHandler} value={individualSpeed}></input>
          </div>
          <div className='poket-update-input-third'>
          <div className='poket-update-sample-value'>{'노력치'}</div>
            <input ref={effortHpRef} className='poket-update-sample-HP' placeholder='HP' onChange={onEffortHpChangeHandler} value={effortHp} ></input>
            <input ref={effortAttackeRef} className='poket-update-sample-attack' placeholder='공격' onChange={onEffortAttackpChangeHandler} value={effortAttack} ></input>
            <input ref={effortDefenceRef} className='poket-update-sample-defence' placeholder='방어' onChange={onEffortDefenceChangeHandler} value={effortDefence} ></input>
            <input ref={effortSpecialAttackeRef} className='poket-update-sample-special-attack' placeholder='특수 공격' onChange={onEffortSpecialAttackChangeHandler} value={effortSpecialAttack} ></input>
            <input ref={effortSpecialDefenceRef} className='poket-update-sample-special-defence' placeholder='특수 방어' onChange={onEffortSpecialDefenceChangeHandler} value={effortSpecialDefence} ></input>
            <input ref={effortSpeedRef} className='poket-update-sample-speed' placeholder='스피드' onChange={onEffortSpeedChangeHandler}value={effortSpeed}></input>
          </div>
          <div className='poket-update-input-fourth'>
            <div className='poket-update-sample-technology'>{'기술배치'}</div>
            <input ref={technologyOneRef} className='poket-update-sample-technology-one' onChange={onTechnologyOneChangeHandler} value={technologyOne} ></input>
            <input ref={technologyTwoRef} className='poket-update-sample-technology-two' onChange={onTechnologyTwoChangeHandler}value={technologyTwo} ></input>
            <input ref={technologyThreeRef} className='poket-update-sample-technology-three' onChange={onTechnologyThreeChangeHandler} value={technologyThree}></input>
            <input ref={technologyFourRef} className='poket-update-sample-technology-four' onChange={onTechnologyFourChangeHandler}value={technologyFour} ></input>
          </div>
        </div>
          <div className='poket-update-button-box' >
            <button className='poket-update-button' onClick={onUpdateButtonClickHandler} >{'수정'}</button>
          </div>
      </div>
    </div>
  )
}