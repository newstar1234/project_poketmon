package com.example.poketmon.dto.response;

import java.util.ArrayList;
import java.util.List;

import com.example.poketmon.repository.resultSet.PoketListResultSet;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PoketListResponseDto{
  
  private int poketmonNumber;
  private String name;
  private String type;
  private String specificity;
  private String characters;
  private String things;
  private int individualHp;
  private int individualAttack;
  private int individualDefence;
  private int individualSpecialAttack;
  private int individualSpecialDefence;
  private int individualSpeed;
  private int effortHp;
  private int effortAttack;
  private int effortDefence;
  private int effortSpecialAttack;
  private int effortSpecialDefence; 
  private int effortSpeed;
  private String technologyOne;
  private String technologyTwo;
  private String technologyThree;
  private String technologyFour;

  public PoketListResponseDto(PoketListResultSet resultSet) {
    this.poketmonNumber = resultSet.getPoketmonNumber();
    this.name = resultSet.getName();
    this.type = resultSet. getType();
    this.specificity = resultSet.getSpecificity();
    this.characters = resultSet.getCharacters();
    this.things = resultSet.getThings();
    this.individualHp = resultSet.getIndividualHp();
    this.individualAttack = resultSet.getIndividualAttack();
    this.individualDefence = resultSet.getIndividualDefence();
    this.individualSpecialAttack = resultSet.getIndividualSpecialAttack();
    this.individualSpecialDefence = resultSet.getIndividualSpecialDefence();
    this.individualSpeed = resultSet.getIndividualSpeed();
    this.effortHp = resultSet.getEffortHp();
    this.effortAttack = resultSet.getEffortAttack();
    this.effortDefence = resultSet.getEffortDefence();
    this.effortSpecialAttack = resultSet.getEffortSpecialAttack();
    this.effortSpecialDefence = resultSet.getEffortSpecialDefence();
    this.effortSpeed = resultSet.getEffortSpeed();
    this.technologyOne = resultSet.getTechnologyOne();
    this.technologyTwo = resultSet.getTechnologyTwo();
    this.technologyThree = resultSet.getTechnologyThree();
    this.technologyFour = resultSet.getTechnologyFour();
  }

  public static List<PoketListResponseDto> copyPoketList(List<PoketListResultSet> resultSets) {
    List<PoketListResponseDto> poketList = new ArrayList<>();

    for(PoketListResultSet entity:resultSets) {
      PoketListResponseDto poket = new PoketListResponseDto(entity);
      poketList.add(poket);
    }
    return poketList;
  }

}