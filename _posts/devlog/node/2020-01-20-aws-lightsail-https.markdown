---
layout: post
title: 'AWS LightSail 로드 밸런서를 사용하여 HTTPS 보안 연결.'
subtitle: 'AWS LightSail 로드 밸런서를 사용하여 HTTPS 보안 연결.'
category: devlog
tags: node
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### AWS LightSail 로드 밸런서를 사용하여 HTTPS 보안 연결.

# 요약

1. AWS Route53 도메인 구입 및 등록
2. LightSail DNS 생성
3. 호스팅 네임 서버 추가
4. LightSail 로드 밸런서 생성
5. https 인증서 생성 및 DNS 연결

## 1. AWS Route53 도메인 구입 및 등록

아래 경로에서 원하는 도메인을 구매한다.

EC2 세팅의 경우 route53 에서 구매하면 편하게 세팅할 수 있는 장점이 있지만, LightSail 은 그렇지 않으니 타사를 이용해도 관계가 없다.

- [https://console.aws.amazon.com/route53](https://console.aws.amazon.com/route53)

![aws https](/assets/img/post/https01.png)

## 2. LightSaile DNS 생성

네트워킹 메뉴에서 DNS 영역을 생성 한다.

![aws https](/assets/img/post/https02.png)

호스팅에 이름 서버를 추가 하기위해 생성된 DNS 영역 하단의 이름 서버를 복사한다.

![aws https](/assets/img/post/https03.png)

## 3. 호스팅에 네임서버 추가

본 포스팅은 AWS Route53 에서 진행하였으므로 타사를 이용했다면 구매한 호스팅 사이트에서 진행해야 됩니다.

DNS 에서 복사한 이름 서버를 아래 `이름 서버 추가 또는 편집` 에 넣어 줍니다.

- [https://console.aws.amazon.com/route53/home#DomainListing](https://console.aws.amazon.com/route53/home#DomainListing:)

![aws https](/assets/img/post/https04.png)

## 4. LightSail 로드 밸런서 생성

다시 라이트세일로 돌아와서, 로드 밸런서를 생성합니다.

![aws https](/assets/img/post/https05.png)

기존에 사용중인 인스턴스를 로드 밸런서에 연결.

![aws https](/assets/img/post/https06.png)

## 5.  https 인증서 생성 및 DNS 연결

로드 밸런서에서 https 인증서를 생성합니다.

![aws https](/assets/img/post/https07.png)

인증서를 생성하면 기본 도메인, 하위 도메인 별로 레코드의 `이름`과 `값`이 생성 됩니다.

**이 이름/값을 DNS에 등록해야됩니다.**

![aws https](/assets/img/post/https08.png)

다시 라이트세일의 DNS 영역으로 돌아와서 `CNAME 레코드`를 추가 합니다.

레코드 등록시 기본 도메인이 디폴트로 들어가있기 때문에 그대로 복사 붙혀넣기 하면 **도메인값이 중복**되니 주의해줍니다.

- 인증서 이름 → 도메인
- 인증서 값 → 매핑

![aws https](/assets/img/post/https09.png)

등록 후 잠시 기다리면... 아래 처럼 사용가능한 상태가 됩니다.

![aws https](/assets/img/post/https10.png)